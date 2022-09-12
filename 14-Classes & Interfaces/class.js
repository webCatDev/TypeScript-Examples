"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private employees: string[] = []; // only accessible inside  a class, not from child classes
        this.employees = [];
        // this.id = id
        // this.name = name;
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeesInformation = function () {
        console.log('Employees length:', this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2022;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins, reports) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        _this.reports = reports;
        _this.lastReport = reports[reports.length - 1];
        return _this;
    }
    ITDepartment.prototype.addReport = function (value) {
        this.reports.push(value);
    };
    Object.defineProperty(ITDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found!');
        },
        set: function (value) {
            if (value.trim()) {
                this.addReport(value);
                return;
            }
            throw new Error('enter a valid value');
        },
        enumerable: false,
        configurable: true
    });
    ITDepartment.prototype.describe = function () {
        console.log('ITDepartment ID: ' + this.id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, admins) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.admins = admins;
        return _this;
    }
    AccountingDepartment.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('123123', ['Derrek']);
    };
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (employee === 'Manu')
            return;
        this.employees.push(employee);
    };
    AccountingDepartment.prototype.describe = function () {
        console.log('Accounting ID: ' + this.id);
    };
    return AccountingDepartment;
}(Department));
// console.log(Department.createEmployee('helena'))
// console.log(Department.fiscalYear)
// const it = new ITDepartment('4234', ['Max'], ['dasd', 'last report']);
// it.addEmployee('Manu');
// it.printEmployeesInformation();
// it.describe();
// console.log(it.mostRecentReport);
// it.mostRecentReport = 'New report';
// const accounting = new AccountingDepartment('1212', ['Hamza']);
// console.log(accounting);
// accounting.describe();
// accounting.addEmployee('Neslihan');
// accounting.addEmployee('Zafer');
// accounting.employees[2] = 'Mehmet' // avoid allowing two ways of accessing / manipulating variables
// accounting.describe();
// accounting.printEmployeesInformation();
// const accountingCopy = { describe: accounting.describe } // no name property
// accountingCopy.describe() // error
