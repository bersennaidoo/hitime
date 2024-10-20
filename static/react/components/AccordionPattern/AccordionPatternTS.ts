export class AccordionPatternTS {
  public rootEl: HTMLElement;
  public buttonEl: HTMLButtonElement | null;
  public contentEl: HTMLElement | null;
  public open: boolean;

  constructor(rootEl: HTMLElement) {
    this.rootEl = rootEl;
    this.buttonEl = this.rootEl.querySelector("button[aria-expanded]");

    const controlsId = this.buttonEl?.getAttribute("aria-controls");
    this.contentEl = document.getElementById(controlsId as string);

    this.open = this.buttonEl?.getAttribute("aria-expanded") === "true";

    //this.buttonEl?.addEventListener("click", this.onButtonClick);
  }

  public onButtonClick = () => {
    this.toggle(!this.open);
  };

  public toggle = (open: boolean) => {
    if (open === this.open) {
      return;
    }

    this.open = open;

    this.buttonEl?.setAttribute("aria-expanded", `${open}`);
    if (open) {
      this.contentEl?.removeAttribute("hidden");
    } else {
      this.contentEl?.setAttribute("hidden", "");
    }
  };

  // Add public open and close methods for convenience
  public openA = () => {
    this.toggle(true);
  };

  public closeA = () => {
    this.toggle(false);
  };
}
