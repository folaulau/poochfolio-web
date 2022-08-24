export type Draft<T> = Omit<T, "id" | "uuid" | "createdAt" | "updatedAt">
