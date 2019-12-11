# Typescript Generics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

## API Server

The demo uses a super simple and easy to use RESTSful API provided by [json-server](https://github.com/typicode/json-server).

`npm run server` will spool up the API on `localhost:3000`.

The data used by the API is stured in `src/assets/db.json`. This file is modified in place by API operations, so expect to see it change as the data is manipulated.

## Angular Development Server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Scaffolding

You can use the CLI...

> Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Or, use the [Angular Console VSCode extension](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console), which is way easier.

# Exercises

## 1. Build an Abstract Service

1. Locate and examine the common parts of the two included services `StudentService` and `InstructorService`.
1. Build an abstract service, `BaseCrudService`, that provides most of these common elements

   ```javascript
   @Injectable()
   export abstract class BaseCrudService {
     abstract endpoint: string // must be implemented by implementor

     constructor(private http: HttpClient) {}

     fetchAll(): Observable<any[]> {
       // TO BE IMPLEMENTED
     }
     create(item: Object): Observable<any> {
       // TO BE IMPLEMENTED
     }
     ...
   }
   ```

1. Utilize generics to support typing on the abstract service in order to preserve strong typing by implementers

   ```javascript
   @Injectable()
   export abstract class BaseCrudService<T> {
     abstract endpoint: string // must be implemented by implementor

     constructor(protected http: HttpClient) {}

     fetchAll(): Observable<T[]> {
       // TO BE IMPLEMENTED
     }
     create(item: Object): Observable<T> {
       // TO BE IMPLEMENTED
     }
     ...
   }

   ```

1. Replace the existing services with new ones that utilize the abstract service to drastically reduce the code needed to implement a service

   ```javascript
   @Injectable()
   export class StudentService extends BaseCrudService<Student> {
     endpoint = 'students'

     constructor(protected http: HttpClient) {
       super(http)
     }
   }
   ```

**BONUS:** Refactor the models using a `BaseItem` interface so it's possible to rely on the `id` field inside the abstract service, so `getById` can be moved into `BaseCrudService`

```javascript
@Injectable()
   export abstract class BaseCrudService<T extends BaseItem> {
     ...
   }
```

**BONUS:** Build an abstract mock service that can be used to easily make mock services that can be used safely in test suites without needing to import the `HttpClientTestingModule`

```javascript
   @Injectable()
   export abstract class BaseMockCrudService<T extends BaseItem> {

     abstract mockData: T[]

     constructor() {}

     fetchAll(): Observable<T[]> {
       return of(this.mockData)
     }

     create(item: T): Observable<T> {
       // CODE TO ADD item T this.mockData
       return of(item)
     }
     ...
   }
```

```javascript
@Injectable()
export class MockStudentService extends BaseMockCrudService<Student> {}
```

## 2. Build an Abstract List Component

1. Locate and examine the two list components, `StudentListComponent` and `InstructorListComponent`
1. Extract the common elements of the list components into an abstract `BaseListComponent`
1. Be sure to utilize generics to support data typing for the table data source

   ```javascript
   @Component({
     ...
   })
   export abstract class BaseListComponent<T> implements AfterViewInit {
     @Output() edit = new EventEmitter<T>()

     abstract tableColumns: string[]

     dataSource: MatTableDataSource<T>

     @ViewChild(MatSort, { static: false }) sort: MatSort

     constructor() {
       this.dataSource = new MatTableDataSource<T>()
     }

     abstract ngAfterViewInit()

     abstract onDelete(item: T)
   }
   ```

1. Use the new abstract component to update the existing List Components to reduce the duplicate code

   ```javascript
   @Component({
     ...
   })
   export class StudentListComponent extends BaseListComponent<Student> {
     tableColumns = ['name', 'majors', 'actions']

     constructor(private studentService: StudentService) {
       this.studentService.fetchAll()
         .subscribe(data => this.dataSource.data = date)
     }

     ngAfterViewInit() {
       ...
     })
   }
   ```

## 3. Use the Abstract service and component to implement a new feature

1. Now that you are equipped with quick ways to add a new service and list component, try building out a new form/list data management feature for the following:
   - Classes: `{ name, instructor, classroom, schedule (M-F), time }`
