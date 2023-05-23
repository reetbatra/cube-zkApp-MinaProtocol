// import {
//     Field,
//     SmartContract,
//     state,
//     State,
//     method
// } from 'snarkyjs';

// export class Cube extends SmartContract {
//     @state(Field) num = State<Field>();
// // num is an onchain state that takes a feild element

//     init(){
//         super.init();
//         this.num.set(Feild(3));
//     }

// }
// //     @method update(Cube: Feild){
// //         const currentState = this.num.get();
// //         this.num.assertEquals(currentState);
// //         Cube.assertEquals(currentState.null(currentState));
// //         this.num.set(Cube);

// //     }
// // }

//     @method update(cubeRoot: Field){
//         const currentState = this.num.get();
//         const cube = cubeRoot.mul(cubeRoot).mul(cubeRoot);
//         this.num.assertEquals(currentState);
//         cube.assertEquals(currentState);
//         this.num.set(cube);
//     }
import { Field, SmartContract, state, State, method } from 'snarkyjs';

export class Cube extends SmartContract {
  @state(Field) num = State<Field>();
  // num is an onchain state that takes a field element

  init() {
    super.init();
    this.num.set(Field(3));
  }

  @method update(cubeRoot: Field) {
    const currentState = this.num.get();
    const cube = cubeRoot.mul(cubeRoot).mul(cubeRoot);
    this.num.assertEquals(currentState);
    cube.assertEquals(currentState);
    this.num.set(cube);
  }
}
