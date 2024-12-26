"use server"

import { revalidatePath } from "next/cache"

async function revalidate(path) {
    revalidatePath(path)
}
export {
    revalidate
} 