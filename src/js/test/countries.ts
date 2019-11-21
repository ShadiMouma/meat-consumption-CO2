import Main from '../models/World';
import { expect } from 'chai';


const main = new Main(),
    data = main.countries;


export const checkCounrtiesLength = () => {
    expect(data).to.have.length(228);
};