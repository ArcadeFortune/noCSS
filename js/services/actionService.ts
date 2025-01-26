interface newActionMethods {
  get(mousePosition: MousePosition): Action
  run(action: Action): Action;
}