export const SKILLS_ACTIONS_MODULE_NAME = 'SkillActions';

/**
 * Because typescript doesn't know when in the lifecycle of foundry your code runs, we have to assume that the
 * canvas is potentially not yet initialized, so it's typed as declare let canvas: Canvas | {ready: false}.
 * That's why you get errors when you try to access properties on canvas other than ready.
 * In order to get around that, you need to type guard canvas.
 * Also be aware that this will become even more important in 0.8.x because no canvas mode is being introduced there.
 * So you will need to deal with the fact that there might not be an initialized canvas at any point in time.
 * @returns
 */
export function getGame(): Game {
  if (!(game instanceof Game)) {
    throw new Error('Game Is Not Initialized');
  }
  return game;
}

export function registerSettings(): void {
  getGame().settings.register(SKILLS_ACTIONS_MODULE_NAME, 'Position', {
    name: `${SKILLS_ACTIONS_MODULE_NAME}.Settings.Position.name`,
    hint: `${SKILLS_ACTIONS_MODULE_NAME}.Settings.Position.hint`,
    scope: 'client',
    config: true,
    default: 'top',
    type: String,
    choices: {
      top: `${SKILLS_ACTIONS_MODULE_NAME}.Settings.Position.top`,
      bot: `${SKILLS_ACTIONS_MODULE_NAME}.Settings.Position.bot`,
    },
  });
}
