class Department {
    // private name: string //Declaring a private attribute name of type string. This means that this attribute can only be accessed within the class and not from outside the class.
    // private employees: string[] = []; 
    // private id: string;

    constructor(private name: string, protected employees: string[] = [], private readonly id: string) { //This is a shortcut to declare and initialize the attributes of the class. This will automatically create the attributes and assign the values to them.
        //readonly is used to make the attribute read only. This means that the attribute can only be assigned a value once and cannot be changed later.
        console.log("Department Constructor called")
        // this.name = n; //Assigning value to name attribute of the specific object created.
    }
    describe(this: Department) { //this: Department is used to specify that the describe function can only be called by the objects of Department class.
        console.log("Department: ", this.id, this.name) //this.name is used to access the name attribute of the specific object created.(Or the object bu which this function was called)
    }

    addEmployee(employee: string){
        this.employees.push(employee); 
        // this.id = "d2"; //This will give an error because the id attribute is readonly and cannot be changed after it is assigned a value.
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }

    static createEmployees(name: string){
        return {name: name}; //This is a static function. This means that this function can be called without creating an object of the class. This function is called by the class itself.
    }
}

class ITDepartment extends Department {
    //Even we don't write any function here the function of base can be called by this class's object.
    public admins: string[];
    constructor(name: string, ad: string[]){
        super(name, [], "IT")
        this.admins = ad;
    }
}

class AccoutingDept extends Department {
    private reports: string[];
    private lastReport: string;
    constructor(name: string, reports: string[]){
        super(name, [], "ACC")
        this.reports = reports;
        this.lastReport = reports[reports.length-1];
    }
    setRreports(report: string){
        this.reports.push(report);
        this.lastReport = report;

    }
    getReports(){
        console.log("Reports: ",this.reports);
    }
    addEmployee(employee: string): void { //Function Overriding
        if(employee=="Maroof"){
            null;
        }
        else{
            this.employees.push(employee);
        }
    }
    getEmployees(){
        console.log(this.employees)
    }

    get mostRecentReport(){
        if(this.lastReport)
        return this.lastReport;
        throw new Error("No Report Found");
    }

    set mostRecentReport(report: string){
        this.setRreports(report);
    }
}


const accounting = new Department("Accounting", [], "d1");
// accounting.name = "Accouting changed from outside the class" If name was public this would be possible but now the class is private so it will give an error.
console.log(accounting.describe())
accounting.addEmployee("Sana")
accounting.addEmployee("Maroof")
// accounting.employees[2] = "Ali" //This will not give an error because the employees attribute is public. So, it can be accessed and modified from outside the class. But this should not be 
accounting.printEmployeeInformation();

// const accountingCopy = {name: "Accounting Copy", describe: accounting.describe} //Another object created with name Maroof and describe function of accounting object.
// console.log(accountingCopy.describe()); //The name will be passed Maroof and not Sana. Because the accountingType object has the name Maroof.

const ITDept =  new  ITDepartment("Ali", ["Khidmat", "Insiya"]);
console.log("IT department object:", ITDept);

const AccDep = new AccoutingDept("The Accounts", ["Report1, Report2"]);
AccDep.setRreports("Report 3");
AccDep.getReports();
AccDep.addEmployee("Maroof");
AccDep.addEmployee("Sana");
AccDep.getEmployees();
AccDep.mostRecentReport = "Report 4"; //This is how we give value to the setter fucntion.
console.log("The last Report", AccDep.mostRecentReport); //This will not give an error because mostRecentReport is a getter and can be accessed like an attribute. It will return the value of lastReport attribute.

const emp1 = Department.createEmployees("Employee1");