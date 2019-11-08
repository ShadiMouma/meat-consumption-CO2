import './css/style.scss';
import Meat from './js/models/Meat';
import axios from "axios";
import state from './js/interfaces/state';

const state: state = {};

state.meat = new Meat();

const controlMeat = async () => {
    const res = await state.meat.getData();

    state.meat.meat = res;
};

controlMeat().then();
