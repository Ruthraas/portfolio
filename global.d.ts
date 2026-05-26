declare module "*.css";

declare module "@barba/core" {
  type BarbaPreventData = {
    el?: Element | null;
  };

  type BarbaTransitionData = {
    current: { container: HTMLElement };
    next: { container: HTMLElement };
  };

  type BarbaTransition = {
    name?: string;
    leave?: (data: BarbaTransitionData) => unknown;
    enter?: (data: BarbaTransitionData) => unknown;
  };

  type BarbaOptions = {
    preventRunning?: boolean;
    timeout?: number;
    prevent?: (data: BarbaPreventData) => boolean;
    transitions?: BarbaTransition[];
  };

  const barba: {
    init: (options: BarbaOptions) => void;
    destroy: () => void;
  };

  export default barba;
}
