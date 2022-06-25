import { Ref } from "vue";

export function useProvideModal(key: string) {
  const isActive = useState(key, () => false);
  const setIsActive = (value: boolean) => (isActive.value = value);
  const toggle = () => (isActive.value = !isActive.value);

  provide(key, {
    isActive,
    setIsActive,
    toggle,
  });
}

export function useModal(key: string) {
  return inject<{
    isActive: Ref<boolean>;
    setIsActive: (value: boolean) => boolean;
    toggle: () => boolean;
  }>(key);
}
