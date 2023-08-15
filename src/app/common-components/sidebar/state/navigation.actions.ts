import { createActionGroup, props } from "@ngrx/store";

export const NavigationActions = createActionGroup({
    source: 'Navigation',
    events: {
        'Set Path': props<{pathId: string}>()
    }
});