type Ref<T = any> = {
  value: T
}

type UnwrapRef<T> = {
  ref: T extends Ref<infer R> ? UnwrapRef<R> : T
  object: {[K in keyof T] : UnwrapRef<T[K]>}
  other: T
}[T extends Ref ? 'ref' : 'other']


function ref<T>(value: T): T extends Ref ? T : Ref<UnwrapRef<T>> {

}

const count = ref(ref(2)) // ref(2) === Ref<number>

count.value // number