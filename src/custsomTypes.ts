
// with this type we can override the defined object property types  

type Override<A, B> = Omit<A, keyof B> & {
    [K in keyof B as B[K] extends never  ? never : K]: B[K]
}
