import { sumThese } from "../components/Sum";

test("Checking if the sum function is working fine or  not ", ()=>{
    const result=sumThese(10,10);

    // assertion 
    expect(result).toBe(20);
})