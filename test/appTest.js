"use strict";
let sharedObject = require('../app').sharedObject;
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
global.$ = require('jquery')(window);

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

describe('Dom testing', function () {
    before(function () {
        $ = require('jquery');
    });
    it('name property should start with null', function () {
        expect(sharedObject.name).to.equal(null, 'Name was not null')
    });
    it('income property should start with null', function () {
        expect(sharedObject.income).to.equal(null, 'Income was not null')
    });
    describe('Test changeName function ', function () {
        it('with invalid parameters should not change name property', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal(null, 'Name changed incorectly')
        });
        it('with invalid parameters and preexisting value should not change name property', function () {
            sharedObject.name = 'Pesho';
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal('Pesho', 'Name changed incorectly')
        });
        it('with invalid parameters and preexisting value should not change name property', function () {
            let nameTextBox = $('#name');
            nameTextBox.val('Ivan');
            sharedObject.changeName('');
            expect(nameTextBox.val()).to.equal('Ivan', 'Name changed incorectly')
        });
        it('with valid parameters should change name property', function () {
            sharedObject.changeName('Joro');
            expect(sharedObject.name).to.equal('Joro');
        });
        it('with valid parameters should change textbox value', function () {
            sharedObject.changeName('Joro');
            let nameTextBox = $('#name');
            expect(nameTextBox.val()).to.equal('Joro');
        })
    });

    describe('Test changeIncome function ', function () {
        it('with invalid parameters should not change income property', function () {
            sharedObject.income = 130;
            sharedObject.changeIncome({name: 'pesho'});
            expect(sharedObject.income).to.equal(130, 'Income changed incorectly')
        });
        it('with floating point parameters and preexisting value should not change income property', function () {
            sharedObject.income = 13;
            sharedObject.changeIncome(245.25);
            expect(sharedObject.income).to.equal(13, 'Income changed incorectly')
        });
        it('with negative integer should not change income property', function () {
            sharedObject.income = 13;
            sharedObject.changeIncome(-10);
            expect(sharedObject.income).to.equal(13, 'Income changed incorectly')
        });
        it('with zero should not change income property', function () {
            sharedObject.income = 13;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.equal(13, 'Income changed incorectly')
        });
        it('with invalid parameters should not change income textBox', function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome({name: 'pesho'});
            expect(incomeTextBox.val()).to.equal('5', 'Income changed incorectly')
        });
        it('with floating point parameters and preexisting value should not change income textBox', function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome(25.36);
            expect(incomeTextBox.val()).to.equal('5', 'Income changed incorectly')
        });
        it('with negative integer should not change income textBox', function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome(-15);
            expect(incomeTextBox.val()).to.equal('5', 'Income changed incorectly')
        });
        it('with zero should not change income textBox', function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('5');
            sharedObject.changeIncome(0);
            expect(incomeTextBox.val()).to.equal('5', 'Income changed incorectly')
        });
        it('with valid integer should change income property', function () {
            sharedObject.changeIncome(56);
            expect(sharedObject.income).to.equal(56, 'Income changed incorectly')
        });
        it('with valid integer should change income property', function () {
            sharedObject.changeIncome(56);
            let incomeTextBox = $('#income');
            expect(incomeTextBox.val()).to.equal('56', 'Income changed incorectly')
        });
    });
    describe('Test updateName function ', function () {
        it('with invalid parameter should not change name property', function () {
            sharedObject.name = 'Test';
            let nameTextBox = $('#name');
            nameTextBox.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Test', 'Name changed incorectly')
        });
        it('with valid parameter should change name property', function () {
            let nameTextBox = $('#name');
            nameTextBox.val('Test');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Test', 'Name changed incorectly')
        })

    });

    describe('Test updateIncome function ', function () {
        it('with string parameter should not change income property', function () {
            sharedObject.income = 55;
            let incomeTextBox = $('#income');
            incomeTextBox.val('pesho');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55, 'Income changed incorectly')
        });
        it('with floating point number parameter shouldnot  change income property', function () {
            sharedObject.income = 55;
            let incomeTextBox = $('#income');
            incomeTextBox.val('55.36');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55, 'Income changed incorectly')
        });
        it('with negative number parameter shouldnot  change income property', function () {
            sharedObject.income = 55;
            let incomeTextBox = $('#income');
            incomeTextBox.val('-20');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55, 'Income changed incorectly')
        });
        it('with empty string = zero parameter should not change income property', function () {
            sharedObject.income = 55;
            let incomeTextBox = $('#income');
            incomeTextBox.val('');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55, 'Income changed incorectly')
        });
        it('with valid parameter should change income property', function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('147');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(147)
        });

    })
});