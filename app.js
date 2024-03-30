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
    // private name: string //Declaring a private attribute name of type string. This means that this attribute can only be accessed within the class and not from outside the class.
    // private employees: string[] = []; 
    // private id: string;
    function Department(name, employees, id) {
        if (employees === void 0) { employees = []; }
        this.name = name;
        this.employees = employees;
        this.id = id;
        //readonly is used to make the attribute read only. This means that the attribute can only be assigned a value once and cannot be changed later.
        console.log("Department Constructor called");
        // this.name = n; //Assigning value to name attribute of the specific object created.
    }
    Department.prototype.describe = function () {
        console.log("Department: ", this.id, this.name); //this.name is used to access the name attribute of the specific object created.(Or the object bu which this function was called)
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
        // this.id = "d2"; //This will give an error because the id attribute is readonly and cannot be changed after it is assigned a value.
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(name, ad) {
        var _this = _super.call(this, name, [], "IT") || this;
        _this.admins = ad;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccoutingDept = /** @class */ (function (_super) {
    __extends(AccoutingDept, _super);
    function AccoutingDept(name, reports) {
        var _this = _super.call(this, name, [], "ACC") || this;
        _this.reports = reports;
        _this.lastReport = reports[reports.length - 1];
        return _this;
    }
    AccoutingDept.prototype.setRreports = function (report) {
        this.reports.push(report);
        this.lastReport = report;
    };
    AccoutingDept.prototype.getReports = function () {
        console.log("Reports: ", this.reports);
    };
    AccoutingDept.prototype.addEmployee = function (employee) {
        if (employee == "Maroof") {
            null;
        }
        else {
            this.employees.push(employee);
        }
    };
    AccoutingDept.prototype.getEmployees = function () {
        console.log(this.employees);
    };
    Object.defineProperty(AccoutingDept.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport)
                return this.lastReport;
            throw new Error("No Report Found");
        },
        set: function (report) {
            this.setRreports(report);
        },
        enumerable: false,
        configurable: true
    });
    return AccoutingDept;
}(Department));
var accounting = new Department("Accounting", [], "d1");
// accounting.name = "Accouting changed from outside the class" If name was public this would be possible but now the class is private so it will give an error.
console.log(accounting.describe());
accounting.addEmployee("Sana");
accounting.addEmployee("Maroof");
// accounting.employees[2] = "Ali" //This will not give an error because the employees attribute is public. So, it can be accessed and modified from outside the class. But this should not be 
accounting.printEmployeeInformation();
// const accountingCopy = {name: "Accounting Copy", describe: accounting.describe} //Another object created with name Maroof and describe function of accounting object.
// console.log(accountingCopy.describe()); //The name will be passed Maroof and not Sana. Because the accountingType object has the name Maroof.
var ITDept = new ITDepartment("Ali", ["Khidmat", "Insiya"]);
console.log("IT department object:", ITDept);
var AccDep = new AccoutingDept("The Accounts", ["Report1, Report2"]);
AccDep.setRreports("Report 3");
AccDep.getReports();
AccDep.addEmployee("Maroof");
AccDep.addEmployee("Sana");
AccDep.getEmployees();
AccDep.mostRecentReport = "Report 4"; //This is how we give value to the setter fucntion.
console.log("The last Report", AccDep.mostRecentReport); //This will not give an error because mostRecentReport is a getter and can be accessed like an attribute. It will return the value of lastReport attribute.
