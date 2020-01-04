import {  BehaviorSubject } from "rxjs";

const luckyNumber = new BehaviorSubject(`Default Lucky Number : 7`);

const luckyNumberSubscriber1 =  luckyNumber.subscribe(luckyNum=>console.log                                                   (`Subscriber 1 ${luckyNum}`));

//emitting new luckyNumber to the stream
const newLuckyNumber = `91`;
luckyNumber.next(newLuckyNumber);

// recieves last emitted value '91' and will recieve future value emitted after the subscription
const luckyNumberSubscriber2 =  luckyNumber.subscribe(luckyNum=>console.log                                                   (`Subscriber 2 ${luckyNum}`));