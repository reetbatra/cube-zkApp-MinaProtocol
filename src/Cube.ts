import { Field, SmartContract, state, State, method } from 'snarkyjs';

export class Cube extends SmartContract {
  @state(Field) num = State<Field>();
  // num is an onchain state that takes a field element

  init() {
    super.init();
    this.num.set(Field(3));
  }

  @method update(cubeRoot: Field) {
    const currentState = this.num.get(); // currentState = 3
    // const cube = currentState.mul(currentState).mul(currentState);
    this.num.assertEquals(currentState); // this.num = 3

    // cubeRoot = 27
    // is 27 == ( currentState * currentState * currentState) i.e. is 27 == 3*3*3
    cubeRoot.assertEquals(currentState.mul(currentState).mul(currentState));
    this.num.set(cubeRoot); // this.num = 27
    console.log(' +========== cubeRoot:>> ', cubeRoot);
  }
}
