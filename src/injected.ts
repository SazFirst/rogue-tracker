// import BattleScene from './pokerogue/battle-scene';

// const touchControlsElement = document.getElementById('touchControls');
// console.log(touchControlsElement);
// if (touchControlsElement) {
//   const observer = new MutationObserver(mutations => {
//     mutations.forEach(async () => {
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       const _window = window as any;
//       const battleScene = _window.Phaser.Display.Canvas.CanvasPool.pool[1].parent.scene as BattleScene;
//       // console.log(battleScene.currentBattle.seenEnemyPartyMemberIds.)
//       battleScene.currentBattle.enemyParty.forEach(pokemon => {
//         console.log('enemy partymember: ', pokemon.id);
//       });
//       battleScene.currentBattle.seenEnemyPartyMemberIds.forEach(memberId => {
//         console.log('seenEnemyPartyMemberId: ', memberId);
//       });
//       battleScene.pushPhase = function (phase: any, defer: boolean) {
//         interceptPhase(phase);
//         originalPushPhase.call(this, phase, defer);
//       }.bind(battleScene);

//       battleScene.unshiftPhase = function (phase: any) {
//         interceptPhase(phase);
//         originalUnshiftPhase.call(this, phase);
//       }.bind(battleScene);

//       battleScene.overridePhase = function (phase: any) {
//         interceptPhase(phase);
//         originalOverridePhase.call(this, phase);
//       }.bind(battleScene);

//       battleScene.tryReplacePhase = function (phase: any) {
//         interceptPhase(phase);
//         originalTryReplacePhase.call(this, phase);
//       }.bind(battleScene);
//       LoaderData.setData("phaseHooksDone", true, false);
//     }
//     });
//   });

//   observer.observe(touchControlsElement, {attributes: true});
// }
