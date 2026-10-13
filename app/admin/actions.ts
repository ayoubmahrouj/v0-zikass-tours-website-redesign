"use server"

import { redirect } from "next/navigation"
import { revalidatePath, updateTag } from "next/cache"
import { checkPassword, endSession, isAdmin, startSession } from "@/lib/admin-auth"
import { deleteReview, REVIEWS_TAG, setReviewStatus, type ReviewStatus } from "@/lib/reviews"

export async function login(_: unknown, form: FormData) {
  await new Promise((r) => setTimeout(r, 600)) // slow down brute force
  if (!checkPassword(String(form.get("password") || ""))) return { error: "Mot de passe incorrect" }
  await startSession()
  redirect("/admin")
}

export async function logout() {
  await endSession()
  redirect("/admin")
}

function refreshSite() {
  updateTag(REVIEWS_TAG)
  revalidatePath("/", "layout")
}

export async function changeStatus(form: FormData) {
  if (!(await isAdmin())) redirect("/admin")
  const id = String(form.get("id"))
  const status = String(form.get("status")) as ReviewStatus
  if (!["pending", "approved", "hidden"].includes(status)) return
  await setReviewStatus(id, status)
  refreshSite()
}

export async function remove(form: FormData) {
  if (!(await isAdmin())) redirect("/admin")
  await deleteReview(String(form.get("id")))
  refreshSite()
}
