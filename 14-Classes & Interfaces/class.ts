abstract class Department {
	static fiscalYear = 2022;
	// private employees: string[] = []; // only accessible inside  a class, not from child classes
	protected employees: string[] = [];

	constructor(protected readonly id: string, public name: string) {
		// this.id = id
		// this.name = name;
	}

	static createEmployee(name: string) {
		return { name };
	}

	abstract describe(
		this: Department
	): void; /* only instances like department type can access this method */

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeesInformation() {
		console.log('Employees length:', this.employees.length);
		console.log(this.employees);
	}
}

class ITDepartment extends Department {
	private lastReport: string;

	constructor(id: string, public admins: string[], private reports: string[]) {
		super(id, 'IT');
		this.lastReport = reports[reports.length - 1];
	}

	addReport(value: string) {
		this.reports.push(value);
	}

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error('No report found!');
	}

	set mostRecentReport(value: string) {
		if (value.trim()) {
			this.addReport(value);
			return;
		}
		throw new Error('enter a valid value');
	}

	describe(this: ITDepartment) {
		console.log('ITDepartment ID: ' + this.id);
	}
}

class AccountingDepartment extends Department {
    private static instance: AccountingDepartment
	private constructor(id: string, public admins: string[]) {
		super(id, 'Accounting');
    }
    
    static getInstance() {
        if (this.instance) {
            return this.instance
        }
        this.instance = new AccountingDepartment('123123', ['Derrek'])
    }

	addEmployee(employee: string): void {
		if (employee === 'Manu') return;
		this.employees.push(employee);
	}

	describe(this: AccountingDepartment) {
		console.log('Accounting ID: ' + this.id);
	}
}

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
