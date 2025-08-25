
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Topic
 * 
 */
export type Topic = $Result.DefaultSelection<Prisma.$TopicPayload>
/**
 * Model SubTopic
 * 
 */
export type SubTopic = $Result.DefaultSelection<Prisma.$SubTopicPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Folder
 * 
 */
export type Folder = $Result.DefaultSelection<Prisma.$FolderPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model StudentScore
 * 
 */
export type StudentScore = $Result.DefaultSelection<Prisma.$StudentScorePayload>
/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>
/**
 * Model AssignedTest
 * 
 */
export type AssignedTest = $Result.DefaultSelection<Prisma.$AssignedTestPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model EmailVerificationCode
 * 
 */
export type EmailVerificationCode = $Result.DefaultSelection<Prisma.$EmailVerificationCodePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  Teacher: 'Teacher',
  Student: 'Student',
  Admin: 'Admin'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Subject: {
  Mathematics: 'Mathematics',
  Ukrainian: 'Ukrainian',
  English: 'English',
  History: 'History'
};

export type Subject = (typeof Subject)[keyof typeof Subject]


export const TestStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type TestStatus = (typeof TestStatus)[keyof typeof TestStatus]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Subject = $Enums.Subject

export const Subject: typeof $Enums.Subject

export type TestStatus = $Enums.TestStatus

export const TestStatus: typeof $Enums.TestStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subTopic`: Exposes CRUD operations for the **SubTopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubTopics
    * const subTopics = await prisma.subTopic.findMany()
    * ```
    */
  get subTopic(): Prisma.SubTopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.folder`: Exposes CRUD operations for the **Folder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Folders
    * const folders = await prisma.folder.findMany()
    * ```
    */
  get folder(): Prisma.FolderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentScore`: Exposes CRUD operations for the **StudentScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentScores
    * const studentScores = await prisma.studentScore.findMany()
    * ```
    */
  get studentScore(): Prisma.StudentScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignedTest`: Exposes CRUD operations for the **AssignedTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssignedTests
    * const assignedTests = await prisma.assignedTest.findMany()
    * ```
    */
  get assignedTest(): Prisma.AssignedTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailVerificationCode`: Exposes CRUD operations for the **EmailVerificationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerificationCodes
    * const emailVerificationCodes = await prisma.emailVerificationCode.findMany()
    * ```
    */
  get emailVerificationCode(): Prisma.EmailVerificationCodeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    Topic: 'Topic',
    SubTopic: 'SubTopic',
    Teacher: 'Teacher',
    Folder: 'Folder',
    Student: 'Student',
    StudentScore: 'StudentScore',
    Test: 'Test',
    AssignedTest: 'AssignedTest',
    Task: 'Task',
    Schedule: 'Schedule',
    Group: 'Group',
    EmailVerificationCode: 'EmailVerificationCode'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "topic" | "subTopic" | "teacher" | "folder" | "student" | "studentScore" | "test" | "assignedTest" | "task" | "schedule" | "group" | "emailVerificationCode"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Topic: {
        payload: Prisma.$TopicPayload<ExtArgs>
        fields: Prisma.TopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findFirst: {
            args: Prisma.TopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findMany: {
            args: Prisma.TopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          create: {
            args: Prisma.TopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          createMany: {
            args: Prisma.TopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          delete: {
            args: Prisma.TopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          update: {
            args: Prisma.TopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          deleteMany: {
            args: Prisma.TopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          upsert: {
            args: Prisma.TopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.TopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicCountArgs<ExtArgs>
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      SubTopic: {
        payload: Prisma.$SubTopicPayload<ExtArgs>
        fields: Prisma.SubTopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubTopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubTopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTopicPayload>
          }
          findFirst: {
            args: Prisma.SubTopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubTopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTopicPayload>
          }
          findMany: {
            args: Prisma.SubTopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTopicPayload>[]
          }
          create: {
            args: Prisma.SubTopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTopicPayload>
          }
          createMany: {
            args: Prisma.SubTopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubTopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTopicPayload>[]
          }
          delete: {
            args: Prisma.SubTopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTopicPayload>
          }
          update: {
            args: Prisma.SubTopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTopicPayload>
          }
          deleteMany: {
            args: Prisma.SubTopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubTopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubTopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTopicPayload>[]
          }
          upsert: {
            args: Prisma.SubTopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTopicPayload>
          }
          aggregate: {
            args: Prisma.SubTopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubTopic>
          }
          groupBy: {
            args: Prisma.SubTopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubTopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubTopicCountArgs<ExtArgs>
            result: $Utils.Optional<SubTopicCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Folder: {
        payload: Prisma.$FolderPayload<ExtArgs>
        fields: Prisma.FolderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FolderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FolderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          findFirst: {
            args: Prisma.FolderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FolderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          findMany: {
            args: Prisma.FolderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          create: {
            args: Prisma.FolderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          createMany: {
            args: Prisma.FolderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FolderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          delete: {
            args: Prisma.FolderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          update: {
            args: Prisma.FolderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          deleteMany: {
            args: Prisma.FolderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FolderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FolderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          upsert: {
            args: Prisma.FolderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          aggregate: {
            args: Prisma.FolderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFolder>
          }
          groupBy: {
            args: Prisma.FolderGroupByArgs<ExtArgs>
            result: $Utils.Optional<FolderGroupByOutputType>[]
          }
          count: {
            args: Prisma.FolderCountArgs<ExtArgs>
            result: $Utils.Optional<FolderCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      StudentScore: {
        payload: Prisma.$StudentScorePayload<ExtArgs>
        fields: Prisma.StudentScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentScorePayload>
          }
          findFirst: {
            args: Prisma.StudentScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentScorePayload>
          }
          findMany: {
            args: Prisma.StudentScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentScorePayload>[]
          }
          create: {
            args: Prisma.StudentScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentScorePayload>
          }
          createMany: {
            args: Prisma.StudentScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentScorePayload>[]
          }
          delete: {
            args: Prisma.StudentScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentScorePayload>
          }
          update: {
            args: Prisma.StudentScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentScorePayload>
          }
          deleteMany: {
            args: Prisma.StudentScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentScorePayload>[]
          }
          upsert: {
            args: Prisma.StudentScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentScorePayload>
          }
          aggregate: {
            args: Prisma.StudentScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentScore>
          }
          groupBy: {
            args: Prisma.StudentScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentScoreCountArgs<ExtArgs>
            result: $Utils.Optional<StudentScoreCountAggregateOutputType> | number
          }
        }
      }
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      AssignedTest: {
        payload: Prisma.$AssignedTestPayload<ExtArgs>
        fields: Prisma.AssignedTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignedTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignedTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTestPayload>
          }
          findFirst: {
            args: Prisma.AssignedTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignedTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTestPayload>
          }
          findMany: {
            args: Prisma.AssignedTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTestPayload>[]
          }
          create: {
            args: Prisma.AssignedTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTestPayload>
          }
          createMany: {
            args: Prisma.AssignedTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignedTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTestPayload>[]
          }
          delete: {
            args: Prisma.AssignedTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTestPayload>
          }
          update: {
            args: Prisma.AssignedTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTestPayload>
          }
          deleteMany: {
            args: Prisma.AssignedTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignedTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignedTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTestPayload>[]
          }
          upsert: {
            args: Prisma.AssignedTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTestPayload>
          }
          aggregate: {
            args: Prisma.AssignedTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignedTest>
          }
          groupBy: {
            args: Prisma.AssignedTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignedTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignedTestCountArgs<ExtArgs>
            result: $Utils.Optional<AssignedTestCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      EmailVerificationCode: {
        payload: Prisma.$EmailVerificationCodePayload<ExtArgs>
        fields: Prisma.EmailVerificationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationCodePayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationCodePayload>
          }
          findMany: {
            args: Prisma.EmailVerificationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationCodePayload>[]
          }
          create: {
            args: Prisma.EmailVerificationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationCodePayload>
          }
          createMany: {
            args: Prisma.EmailVerificationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationCodePayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationCodePayload>
          }
          update: {
            args: Prisma.EmailVerificationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationCodePayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailVerificationCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationCodePayload>[]
          }
          upsert: {
            args: Prisma.EmailVerificationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationCodePayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerificationCode>
          }
          groupBy: {
            args: Prisma.EmailVerificationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationCodeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    topic?: TopicOmit
    subTopic?: SubTopicOmit
    teacher?: TeacherOmit
    folder?: FolderOmit
    student?: StudentOmit
    studentScore?: StudentScoreOmit
    test?: TestOmit
    assignedTest?: AssignedTestOmit
    task?: TaskOmit
    schedule?: ScheduleOmit
    group?: GroupOmit
    emailVerificationCode?: EmailVerificationCodeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    topics: number
    tests: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topics?: boolean | AdminCountOutputTypeCountTopicsArgs
    tests?: boolean | AdminCountOutputTypeCountTestsArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
  }


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    subTopics: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subTopics?: boolean | TopicCountOutputTypeCountSubTopicsArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountSubTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubTopicWhereInput
  }


  /**
   * Count Type SubTopicCountOutputType
   */

  export type SubTopicCountOutputType = {
    tests: number
  }

  export type SubTopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | SubTopicCountOutputTypeCountTestsArgs
  }

  // Custom InputTypes
  /**
   * SubTopicCountOutputType without action
   */
  export type SubTopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTopicCountOutputType
     */
    select?: SubTopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubTopicCountOutputType without action
   */
  export type SubTopicCountOutputTypeCountTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    tests: number
    students: number
    schedule: number
    groups: number
    folders: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | TeacherCountOutputTypeCountTestsArgs
    students?: boolean | TeacherCountOutputTypeCountStudentsArgs
    schedule?: boolean | TeacherCountOutputTypeCountScheduleArgs
    groups?: boolean | TeacherCountOutputTypeCountGroupsArgs
    folders?: boolean | TeacherCountOutputTypeCountFoldersArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountFoldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
  }


  /**
   * Count Type FolderCountOutputType
   */

  export type FolderCountOutputType = {
    tests: number
  }

  export type FolderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | FolderCountOutputTypeCountTestsArgs
  }

  // Custom InputTypes
  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolderCountOutputType
     */
    select?: FolderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeCountTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    scores: number
    assignedTests: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | StudentCountOutputTypeCountScoresArgs
    assignedTests?: boolean | StudentCountOutputTypeCountAssignedTestsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentScoreWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAssignedTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignedTestWhereInput
  }


  /**
   * Count Type TestCountOutputType
   */

  export type TestCountOutputType = {
    tasks: number
    studentScores: number
    assignedTo: number
  }

  export type TestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TestCountOutputTypeCountTasksArgs
    studentScores?: boolean | TestCountOutputTypeCountStudentScoresArgs
    assignedTo?: boolean | TestCountOutputTypeCountAssignedToArgs
  }

  // Custom InputTypes
  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountStudentScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentScoreWhereInput
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountAssignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignedTestWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    students: number
    tests: number
    assignedTests: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | GroupCountOutputTypeCountStudentsArgs
    tests?: boolean | GroupCountOutputTypeCountTestsArgs
    assignedTests?: boolean | GroupCountOutputTypeCountAssignedTestsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountAssignedTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignedTestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topics?: boolean | Admin$topicsArgs<ExtArgs>
    tests?: boolean | Admin$testsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topics?: boolean | Admin$topicsArgs<ExtArgs>
    tests?: boolean | Admin$testsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      topics: Prisma.$TopicPayload<ExtArgs>[]
      tests: Prisma.$TestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topics<T extends Admin$topicsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$topicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tests<T extends Admin$testsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly status: FieldRef<"Admin", 'Status'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.topics
   */
  export type Admin$topicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    cursor?: TopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Admin.tests
   */
  export type Admin$testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    cursor?: TestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicMinAggregateOutputType = {
    id: string | null
    subjectType: string | null
    name: string | null
    number: string | null
    adminId: string | null
    createdAt: Date | null
  }

  export type TopicMaxAggregateOutputType = {
    id: string | null
    subjectType: string | null
    name: string | null
    number: string | null
    adminId: string | null
    createdAt: Date | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    subjectType: number
    name: number
    number: number
    adminId: number
    createdAt: number
    _all: number
  }


  export type TopicMinAggregateInputType = {
    id?: true
    subjectType?: true
    name?: true
    number?: true
    adminId?: true
    createdAt?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    subjectType?: true
    name?: true
    number?: true
    adminId?: true
    createdAt?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    subjectType?: true
    name?: true
    number?: true
    adminId?: true
    createdAt?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topic to aggregate.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithAggregationInput | TopicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: string
    subjectType: string
    name: string
    number: string
    adminId: string
    createdAt: Date
    _count: TopicCountAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectType?: boolean
    name?: boolean
    number?: boolean
    adminId?: boolean
    createdAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    subTopics?: boolean | Topic$subTopicsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectType?: boolean
    name?: boolean
    number?: boolean
    adminId?: boolean
    createdAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectType?: boolean
    name?: boolean
    number?: boolean
    adminId?: boolean
    createdAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectScalar = {
    id?: boolean
    subjectType?: boolean
    name?: boolean
    number?: boolean
    adminId?: boolean
    createdAt?: boolean
  }

  export type TopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subjectType" | "name" | "number" | "adminId" | "createdAt", ExtArgs["result"]["topic"]>
  export type TopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    subTopics?: boolean | Topic$subTopicsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type TopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $TopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topic"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      subTopics: Prisma.$SubTopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subjectType: string
      name: string
      number: string
      adminId: string
      createdAt: Date
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }

  type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = $Result.GetResult<Prisma.$TopicPayload, S>

  type TopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface TopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topic'], meta: { name: 'Topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicFindUniqueArgs>(args: SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicFindFirstArgs>(args?: SelectSubset<T, TopicFindFirstArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicFindManyArgs>(args?: SelectSubset<T, TopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
     */
    create<T extends TopicCreateArgs>(args: SelectSubset<T, TopicCreateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topics.
     * @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicCreateManyArgs>(args?: SelectSubset<T, TopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Topics and returns the data saved in the database.
     * @param {TopicCreateManyAndReturnArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
     */
    delete<T extends TopicDeleteArgs>(args: SelectSubset<T, TopicDeleteArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicUpdateArgs>(args: SelectSubset<T, TopicUpdateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicDeleteManyArgs>(args?: SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicUpdateManyArgs>(args: SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics and returns the data updated in the database.
     * @param {TopicUpdateManyAndReturnArgs} args - Arguments to update many Topics.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TopicUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
     */
    upsert<T extends TopicUpsertArgs>(args: SelectSubset<T, TopicUpsertArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topic model
   */
  readonly fields: TopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subTopics<T extends Topic$subTopicsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$subTopicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Topic model
   */
  interface TopicFieldRefs {
    readonly id: FieldRef<"Topic", 'String'>
    readonly subjectType: FieldRef<"Topic", 'String'>
    readonly name: FieldRef<"Topic", 'String'>
    readonly number: FieldRef<"Topic", 'String'>
    readonly adminId: FieldRef<"Topic", 'String'>
    readonly createdAt: FieldRef<"Topic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findMany
   */
  export type TopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic create
   */
  export type TopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Topic.
     */
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }

  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic createManyAndReturn
   */
  export type TopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Topic update
   */
  export type TopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Topic.
     */
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topic updateManyAndReturn
   */
  export type TopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Topic upsert
   */
  export type TopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Topic to update in case it exists.
     */
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     */
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }

  /**
   * Topic delete
   */
  export type TopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter which Topic to delete.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to delete.
     */
    limit?: number
  }

  /**
   * Topic.subTopics
   */
  export type Topic$subTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTopic
     */
    select?: SubTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTopic
     */
    omit?: SubTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTopicInclude<ExtArgs> | null
    where?: SubTopicWhereInput
    orderBy?: SubTopicOrderByWithRelationInput | SubTopicOrderByWithRelationInput[]
    cursor?: SubTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubTopicScalarFieldEnum | SubTopicScalarFieldEnum[]
  }

  /**
   * Topic without action
   */
  export type TopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
  }


  /**
   * Model SubTopic
   */

  export type AggregateSubTopic = {
    _count: SubTopicCountAggregateOutputType | null
    _min: SubTopicMinAggregateOutputType | null
    _max: SubTopicMaxAggregateOutputType | null
  }

  export type SubTopicMinAggregateOutputType = {
    id: string | null
    name: string | null
    number: string | null
    topicId: string | null
  }

  export type SubTopicMaxAggregateOutputType = {
    id: string | null
    name: string | null
    number: string | null
    topicId: string | null
  }

  export type SubTopicCountAggregateOutputType = {
    id: number
    name: number
    number: number
    topicId: number
    _all: number
  }


  export type SubTopicMinAggregateInputType = {
    id?: true
    name?: true
    number?: true
    topicId?: true
  }

  export type SubTopicMaxAggregateInputType = {
    id?: true
    name?: true
    number?: true
    topicId?: true
  }

  export type SubTopicCountAggregateInputType = {
    id?: true
    name?: true
    number?: true
    topicId?: true
    _all?: true
  }

  export type SubTopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubTopic to aggregate.
     */
    where?: SubTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubTopics to fetch.
     */
    orderBy?: SubTopicOrderByWithRelationInput | SubTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubTopics
    **/
    _count?: true | SubTopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubTopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubTopicMaxAggregateInputType
  }

  export type GetSubTopicAggregateType<T extends SubTopicAggregateArgs> = {
        [P in keyof T & keyof AggregateSubTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubTopic[P]>
      : GetScalarType<T[P], AggregateSubTopic[P]>
  }




  export type SubTopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubTopicWhereInput
    orderBy?: SubTopicOrderByWithAggregationInput | SubTopicOrderByWithAggregationInput[]
    by: SubTopicScalarFieldEnum[] | SubTopicScalarFieldEnum
    having?: SubTopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubTopicCountAggregateInputType | true
    _min?: SubTopicMinAggregateInputType
    _max?: SubTopicMaxAggregateInputType
  }

  export type SubTopicGroupByOutputType = {
    id: string
    name: string
    number: string
    topicId: string
    _count: SubTopicCountAggregateOutputType | null
    _min: SubTopicMinAggregateOutputType | null
    _max: SubTopicMaxAggregateOutputType | null
  }

  type GetSubTopicGroupByPayload<T extends SubTopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubTopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubTopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubTopicGroupByOutputType[P]>
            : GetScalarType<T[P], SubTopicGroupByOutputType[P]>
        }
      >
    >


  export type SubTopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    topicId?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    tests?: boolean | SubTopic$testsArgs<ExtArgs>
    _count?: boolean | SubTopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subTopic"]>

  export type SubTopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    topicId?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subTopic"]>

  export type SubTopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    topicId?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subTopic"]>

  export type SubTopicSelectScalar = {
    id?: boolean
    name?: boolean
    number?: boolean
    topicId?: boolean
  }

  export type SubTopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "number" | "topicId", ExtArgs["result"]["subTopic"]>
  export type SubTopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    tests?: boolean | SubTopic$testsArgs<ExtArgs>
    _count?: boolean | SubTopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubTopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type SubTopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }

  export type $SubTopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubTopic"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs>
      tests: Prisma.$TestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      number: string
      topicId: string
    }, ExtArgs["result"]["subTopic"]>
    composites: {}
  }

  type SubTopicGetPayload<S extends boolean | null | undefined | SubTopicDefaultArgs> = $Result.GetResult<Prisma.$SubTopicPayload, S>

  type SubTopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubTopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubTopicCountAggregateInputType | true
    }

  export interface SubTopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubTopic'], meta: { name: 'SubTopic' } }
    /**
     * Find zero or one SubTopic that matches the filter.
     * @param {SubTopicFindUniqueArgs} args - Arguments to find a SubTopic
     * @example
     * // Get one SubTopic
     * const subTopic = await prisma.subTopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubTopicFindUniqueArgs>(args: SelectSubset<T, SubTopicFindUniqueArgs<ExtArgs>>): Prisma__SubTopicClient<$Result.GetResult<Prisma.$SubTopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubTopic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubTopicFindUniqueOrThrowArgs} args - Arguments to find a SubTopic
     * @example
     * // Get one SubTopic
     * const subTopic = await prisma.subTopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubTopicFindUniqueOrThrowArgs>(args: SelectSubset<T, SubTopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubTopicClient<$Result.GetResult<Prisma.$SubTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubTopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTopicFindFirstArgs} args - Arguments to find a SubTopic
     * @example
     * // Get one SubTopic
     * const subTopic = await prisma.subTopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubTopicFindFirstArgs>(args?: SelectSubset<T, SubTopicFindFirstArgs<ExtArgs>>): Prisma__SubTopicClient<$Result.GetResult<Prisma.$SubTopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubTopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTopicFindFirstOrThrowArgs} args - Arguments to find a SubTopic
     * @example
     * // Get one SubTopic
     * const subTopic = await prisma.subTopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubTopicFindFirstOrThrowArgs>(args?: SelectSubset<T, SubTopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubTopicClient<$Result.GetResult<Prisma.$SubTopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubTopics
     * const subTopics = await prisma.subTopic.findMany()
     * 
     * // Get first 10 SubTopics
     * const subTopics = await prisma.subTopic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subTopicWithIdOnly = await prisma.subTopic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubTopicFindManyArgs>(args?: SelectSubset<T, SubTopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubTopic.
     * @param {SubTopicCreateArgs} args - Arguments to create a SubTopic.
     * @example
     * // Create one SubTopic
     * const SubTopic = await prisma.subTopic.create({
     *   data: {
     *     // ... data to create a SubTopic
     *   }
     * })
     * 
     */
    create<T extends SubTopicCreateArgs>(args: SelectSubset<T, SubTopicCreateArgs<ExtArgs>>): Prisma__SubTopicClient<$Result.GetResult<Prisma.$SubTopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubTopics.
     * @param {SubTopicCreateManyArgs} args - Arguments to create many SubTopics.
     * @example
     * // Create many SubTopics
     * const subTopic = await prisma.subTopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubTopicCreateManyArgs>(args?: SelectSubset<T, SubTopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubTopics and returns the data saved in the database.
     * @param {SubTopicCreateManyAndReturnArgs} args - Arguments to create many SubTopics.
     * @example
     * // Create many SubTopics
     * const subTopic = await prisma.subTopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubTopics and only return the `id`
     * const subTopicWithIdOnly = await prisma.subTopic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubTopicCreateManyAndReturnArgs>(args?: SelectSubset<T, SubTopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubTopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubTopic.
     * @param {SubTopicDeleteArgs} args - Arguments to delete one SubTopic.
     * @example
     * // Delete one SubTopic
     * const SubTopic = await prisma.subTopic.delete({
     *   where: {
     *     // ... filter to delete one SubTopic
     *   }
     * })
     * 
     */
    delete<T extends SubTopicDeleteArgs>(args: SelectSubset<T, SubTopicDeleteArgs<ExtArgs>>): Prisma__SubTopicClient<$Result.GetResult<Prisma.$SubTopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubTopic.
     * @param {SubTopicUpdateArgs} args - Arguments to update one SubTopic.
     * @example
     * // Update one SubTopic
     * const subTopic = await prisma.subTopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubTopicUpdateArgs>(args: SelectSubset<T, SubTopicUpdateArgs<ExtArgs>>): Prisma__SubTopicClient<$Result.GetResult<Prisma.$SubTopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubTopics.
     * @param {SubTopicDeleteManyArgs} args - Arguments to filter SubTopics to delete.
     * @example
     * // Delete a few SubTopics
     * const { count } = await prisma.subTopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubTopicDeleteManyArgs>(args?: SelectSubset<T, SubTopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubTopics
     * const subTopic = await prisma.subTopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubTopicUpdateManyArgs>(args: SelectSubset<T, SubTopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubTopics and returns the data updated in the database.
     * @param {SubTopicUpdateManyAndReturnArgs} args - Arguments to update many SubTopics.
     * @example
     * // Update many SubTopics
     * const subTopic = await prisma.subTopic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubTopics and only return the `id`
     * const subTopicWithIdOnly = await prisma.subTopic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubTopicUpdateManyAndReturnArgs>(args: SelectSubset<T, SubTopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubTopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubTopic.
     * @param {SubTopicUpsertArgs} args - Arguments to update or create a SubTopic.
     * @example
     * // Update or create a SubTopic
     * const subTopic = await prisma.subTopic.upsert({
     *   create: {
     *     // ... data to create a SubTopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubTopic we want to update
     *   }
     * })
     */
    upsert<T extends SubTopicUpsertArgs>(args: SelectSubset<T, SubTopicUpsertArgs<ExtArgs>>): Prisma__SubTopicClient<$Result.GetResult<Prisma.$SubTopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTopicCountArgs} args - Arguments to filter SubTopics to count.
     * @example
     * // Count the number of SubTopics
     * const count = await prisma.subTopic.count({
     *   where: {
     *     // ... the filter for the SubTopics we want to count
     *   }
     * })
    **/
    count<T extends SubTopicCountArgs>(
      args?: Subset<T, SubTopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubTopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubTopicAggregateArgs>(args: Subset<T, SubTopicAggregateArgs>): Prisma.PrismaPromise<GetSubTopicAggregateType<T>>

    /**
     * Group by SubTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubTopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubTopicGroupByArgs['orderBy'] }
        : { orderBy?: SubTopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubTopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubTopic model
   */
  readonly fields: SubTopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubTopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubTopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tests<T extends SubTopic$testsArgs<ExtArgs> = {}>(args?: Subset<T, SubTopic$testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubTopic model
   */
  interface SubTopicFieldRefs {
    readonly id: FieldRef<"SubTopic", 'String'>
    readonly name: FieldRef<"SubTopic", 'String'>
    readonly number: FieldRef<"SubTopic", 'String'>
    readonly topicId: FieldRef<"SubTopic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubTopic findUnique
   */
  export type SubTopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTopic
     */
    select?: SubTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTopic
     */
    omit?: SubTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTopicInclude<ExtArgs> | null
    /**
     * Filter, which SubTopic to fetch.
     */
    where: SubTopicWhereUniqueInput
  }

  /**
   * SubTopic findUniqueOrThrow
   */
  export type SubTopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTopic
     */
    select?: SubTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTopic
     */
    omit?: SubTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTopicInclude<ExtArgs> | null
    /**
     * Filter, which SubTopic to fetch.
     */
    where: SubTopicWhereUniqueInput
  }

  /**
   * SubTopic findFirst
   */
  export type SubTopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTopic
     */
    select?: SubTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTopic
     */
    omit?: SubTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTopicInclude<ExtArgs> | null
    /**
     * Filter, which SubTopic to fetch.
     */
    where?: SubTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubTopics to fetch.
     */
    orderBy?: SubTopicOrderByWithRelationInput | SubTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubTopics.
     */
    cursor?: SubTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubTopics.
     */
    distinct?: SubTopicScalarFieldEnum | SubTopicScalarFieldEnum[]
  }

  /**
   * SubTopic findFirstOrThrow
   */
  export type SubTopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTopic
     */
    select?: SubTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTopic
     */
    omit?: SubTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTopicInclude<ExtArgs> | null
    /**
     * Filter, which SubTopic to fetch.
     */
    where?: SubTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubTopics to fetch.
     */
    orderBy?: SubTopicOrderByWithRelationInput | SubTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubTopics.
     */
    cursor?: SubTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubTopics.
     */
    distinct?: SubTopicScalarFieldEnum | SubTopicScalarFieldEnum[]
  }

  /**
   * SubTopic findMany
   */
  export type SubTopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTopic
     */
    select?: SubTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTopic
     */
    omit?: SubTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTopicInclude<ExtArgs> | null
    /**
     * Filter, which SubTopics to fetch.
     */
    where?: SubTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubTopics to fetch.
     */
    orderBy?: SubTopicOrderByWithRelationInput | SubTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubTopics.
     */
    cursor?: SubTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubTopics.
     */
    skip?: number
    distinct?: SubTopicScalarFieldEnum | SubTopicScalarFieldEnum[]
  }

  /**
   * SubTopic create
   */
  export type SubTopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTopic
     */
    select?: SubTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTopic
     */
    omit?: SubTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTopicInclude<ExtArgs> | null
    /**
     * The data needed to create a SubTopic.
     */
    data: XOR<SubTopicCreateInput, SubTopicUncheckedCreateInput>
  }

  /**
   * SubTopic createMany
   */
  export type SubTopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubTopics.
     */
    data: SubTopicCreateManyInput | SubTopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubTopic createManyAndReturn
   */
  export type SubTopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTopic
     */
    select?: SubTopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubTopic
     */
    omit?: SubTopicOmit<ExtArgs> | null
    /**
     * The data used to create many SubTopics.
     */
    data: SubTopicCreateManyInput | SubTopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubTopic update
   */
  export type SubTopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTopic
     */
    select?: SubTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTopic
     */
    omit?: SubTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTopicInclude<ExtArgs> | null
    /**
     * The data needed to update a SubTopic.
     */
    data: XOR<SubTopicUpdateInput, SubTopicUncheckedUpdateInput>
    /**
     * Choose, which SubTopic to update.
     */
    where: SubTopicWhereUniqueInput
  }

  /**
   * SubTopic updateMany
   */
  export type SubTopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubTopics.
     */
    data: XOR<SubTopicUpdateManyMutationInput, SubTopicUncheckedUpdateManyInput>
    /**
     * Filter which SubTopics to update
     */
    where?: SubTopicWhereInput
    /**
     * Limit how many SubTopics to update.
     */
    limit?: number
  }

  /**
   * SubTopic updateManyAndReturn
   */
  export type SubTopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTopic
     */
    select?: SubTopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubTopic
     */
    omit?: SubTopicOmit<ExtArgs> | null
    /**
     * The data used to update SubTopics.
     */
    data: XOR<SubTopicUpdateManyMutationInput, SubTopicUncheckedUpdateManyInput>
    /**
     * Filter which SubTopics to update
     */
    where?: SubTopicWhereInput
    /**
     * Limit how many SubTopics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubTopic upsert
   */
  export type SubTopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTopic
     */
    select?: SubTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTopic
     */
    omit?: SubTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTopicInclude<ExtArgs> | null
    /**
     * The filter to search for the SubTopic to update in case it exists.
     */
    where: SubTopicWhereUniqueInput
    /**
     * In case the SubTopic found by the `where` argument doesn't exist, create a new SubTopic with this data.
     */
    create: XOR<SubTopicCreateInput, SubTopicUncheckedCreateInput>
    /**
     * In case the SubTopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubTopicUpdateInput, SubTopicUncheckedUpdateInput>
  }

  /**
   * SubTopic delete
   */
  export type SubTopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTopic
     */
    select?: SubTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTopic
     */
    omit?: SubTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTopicInclude<ExtArgs> | null
    /**
     * Filter which SubTopic to delete.
     */
    where: SubTopicWhereUniqueInput
  }

  /**
   * SubTopic deleteMany
   */
  export type SubTopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubTopics to delete
     */
    where?: SubTopicWhereInput
    /**
     * Limit how many SubTopics to delete.
     */
    limit?: number
  }

  /**
   * SubTopic.tests
   */
  export type SubTopic$testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    cursor?: TestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * SubTopic without action
   */
  export type SubTopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTopic
     */
    select?: SubTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTopic
     */
    omit?: SubTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTopicInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    isEmailVerified: boolean | null
    phone: string | null
    password: string | null
    subject: $Enums.Subject | null
    plan: string | null
    subscriptionTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.Status | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    isEmailVerified: boolean | null
    phone: string | null
    password: string | null
    subject: $Enums.Subject | null
    plan: string | null
    subscriptionTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.Status | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    name: number
    email: number
    isEmailVerified: number
    phone: number
    password: number
    subject: number
    plan: number
    subscriptionTime: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type TeacherMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    isEmailVerified?: true
    phone?: true
    password?: true
    subject?: true
    plan?: true
    subscriptionTime?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    isEmailVerified?: true
    phone?: true
    password?: true
    subject?: true
    plan?: true
    subscriptionTime?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    isEmailVerified?: true
    phone?: true
    password?: true
    subject?: true
    plan?: true
    subscriptionTime?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: string
    name: string
    email: string
    isEmailVerified: boolean
    phone: string
    password: string
    subject: $Enums.Subject
    plan: string | null
    subscriptionTime: string | null
    createdAt: Date
    updatedAt: Date
    status: $Enums.Status
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    isEmailVerified?: boolean
    phone?: boolean
    password?: boolean
    subject?: boolean
    plan?: boolean
    subscriptionTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    tests?: boolean | Teacher$testsArgs<ExtArgs>
    students?: boolean | Teacher$studentsArgs<ExtArgs>
    schedule?: boolean | Teacher$scheduleArgs<ExtArgs>
    groups?: boolean | Teacher$groupsArgs<ExtArgs>
    folders?: boolean | Teacher$foldersArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    isEmailVerified?: boolean
    phone?: boolean
    password?: boolean
    subject?: boolean
    plan?: boolean
    subscriptionTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    isEmailVerified?: boolean
    phone?: boolean
    password?: boolean
    subject?: boolean
    plan?: boolean
    subscriptionTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    isEmailVerified?: boolean
    phone?: boolean
    password?: boolean
    subject?: boolean
    plan?: boolean
    subscriptionTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "isEmailVerified" | "phone" | "password" | "subject" | "plan" | "subscriptionTime" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | Teacher$testsArgs<ExtArgs>
    students?: boolean | Teacher$studentsArgs<ExtArgs>
    schedule?: boolean | Teacher$scheduleArgs<ExtArgs>
    groups?: boolean | Teacher$groupsArgs<ExtArgs>
    folders?: boolean | Teacher$foldersArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      tests: Prisma.$TestPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
      schedule: Prisma.$SchedulePayload<ExtArgs>[]
      groups: Prisma.$GroupPayload<ExtArgs>[]
      folders: Prisma.$FolderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      isEmailVerified: boolean
      phone: string
      password: string
      subject: $Enums.Subject
      plan: string | null
      subscriptionTime: string | null
      createdAt: Date
      updatedAt: Date
      status: $Enums.Status
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tests<T extends Teacher$testsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Teacher$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedule<T extends Teacher$scheduleArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$scheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends Teacher$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    folders<T extends Teacher$foldersArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$foldersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'String'>
    readonly name: FieldRef<"Teacher", 'String'>
    readonly email: FieldRef<"Teacher", 'String'>
    readonly isEmailVerified: FieldRef<"Teacher", 'Boolean'>
    readonly phone: FieldRef<"Teacher", 'String'>
    readonly password: FieldRef<"Teacher", 'String'>
    readonly subject: FieldRef<"Teacher", 'Subject'>
    readonly plan: FieldRef<"Teacher", 'String'>
    readonly subscriptionTime: FieldRef<"Teacher", 'String'>
    readonly createdAt: FieldRef<"Teacher", 'DateTime'>
    readonly updatedAt: FieldRef<"Teacher", 'DateTime'>
    readonly status: FieldRef<"Teacher", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.tests
   */
  export type Teacher$testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    cursor?: TestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Teacher.students
   */
  export type Teacher$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Teacher.schedule
   */
  export type Teacher$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Teacher.groups
   */
  export type Teacher$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Teacher.folders
   */
  export type Teacher$foldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    cursor?: FolderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Folder
   */

  export type AggregateFolder = {
    _count: FolderCountAggregateOutputType | null
    _min: FolderMinAggregateOutputType | null
    _max: FolderMaxAggregateOutputType | null
  }

  export type FolderMinAggregateOutputType = {
    id: string | null
    name: string | null
    teacherId: string | null
  }

  export type FolderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    teacherId: string | null
  }

  export type FolderCountAggregateOutputType = {
    id: number
    name: number
    teacherId: number
    _all: number
  }


  export type FolderMinAggregateInputType = {
    id?: true
    name?: true
    teacherId?: true
  }

  export type FolderMaxAggregateInputType = {
    id?: true
    name?: true
    teacherId?: true
  }

  export type FolderCountAggregateInputType = {
    id?: true
    name?: true
    teacherId?: true
    _all?: true
  }

  export type FolderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folder to aggregate.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Folders
    **/
    _count?: true | FolderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FolderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FolderMaxAggregateInputType
  }

  export type GetFolderAggregateType<T extends FolderAggregateArgs> = {
        [P in keyof T & keyof AggregateFolder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFolder[P]>
      : GetScalarType<T[P], AggregateFolder[P]>
  }




  export type FolderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithAggregationInput | FolderOrderByWithAggregationInput[]
    by: FolderScalarFieldEnum[] | FolderScalarFieldEnum
    having?: FolderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FolderCountAggregateInputType | true
    _min?: FolderMinAggregateInputType
    _max?: FolderMaxAggregateInputType
  }

  export type FolderGroupByOutputType = {
    id: string
    name: string
    teacherId: string
    _count: FolderCountAggregateOutputType | null
    _min: FolderMinAggregateOutputType | null
    _max: FolderMaxAggregateOutputType | null
  }

  type GetFolderGroupByPayload<T extends FolderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FolderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FolderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FolderGroupByOutputType[P]>
            : GetScalarType<T[P], FolderGroupByOutputType[P]>
        }
      >
    >


  export type FolderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teacherId?: boolean
    tests?: boolean | Folder$testsArgs<ExtArgs>
    teacher?: boolean | Folder$teacherArgs<ExtArgs>
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teacherId?: boolean
    teacher?: boolean | Folder$teacherArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teacherId?: boolean
    teacher?: boolean | Folder$teacherArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectScalar = {
    id?: boolean
    name?: boolean
    teacherId?: boolean
  }

  export type FolderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "teacherId", ExtArgs["result"]["folder"]>
  export type FolderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | Folder$testsArgs<ExtArgs>
    teacher?: boolean | Folder$teacherArgs<ExtArgs>
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FolderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | Folder$teacherArgs<ExtArgs>
  }
  export type FolderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | Folder$teacherArgs<ExtArgs>
  }

  export type $FolderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Folder"
    objects: {
      tests: Prisma.$TestPayload<ExtArgs>[]
      teacher: Prisma.$TeacherPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      teacherId: string
    }, ExtArgs["result"]["folder"]>
    composites: {}
  }

  type FolderGetPayload<S extends boolean | null | undefined | FolderDefaultArgs> = $Result.GetResult<Prisma.$FolderPayload, S>

  type FolderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FolderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FolderCountAggregateInputType | true
    }

  export interface FolderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Folder'], meta: { name: 'Folder' } }
    /**
     * Find zero or one Folder that matches the filter.
     * @param {FolderFindUniqueArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FolderFindUniqueArgs>(args: SelectSubset<T, FolderFindUniqueArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Folder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FolderFindUniqueOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FolderFindUniqueOrThrowArgs>(args: SelectSubset<T, FolderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FolderFindFirstArgs>(args?: SelectSubset<T, FolderFindFirstArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FolderFindFirstOrThrowArgs>(args?: SelectSubset<T, FolderFindFirstOrThrowArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Folders
     * const folders = await prisma.folder.findMany()
     * 
     * // Get first 10 Folders
     * const folders = await prisma.folder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const folderWithIdOnly = await prisma.folder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FolderFindManyArgs>(args?: SelectSubset<T, FolderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Folder.
     * @param {FolderCreateArgs} args - Arguments to create a Folder.
     * @example
     * // Create one Folder
     * const Folder = await prisma.folder.create({
     *   data: {
     *     // ... data to create a Folder
     *   }
     * })
     * 
     */
    create<T extends FolderCreateArgs>(args: SelectSubset<T, FolderCreateArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Folders.
     * @param {FolderCreateManyArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FolderCreateManyArgs>(args?: SelectSubset<T, FolderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Folders and returns the data saved in the database.
     * @param {FolderCreateManyAndReturnArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Folders and only return the `id`
     * const folderWithIdOnly = await prisma.folder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FolderCreateManyAndReturnArgs>(args?: SelectSubset<T, FolderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Folder.
     * @param {FolderDeleteArgs} args - Arguments to delete one Folder.
     * @example
     * // Delete one Folder
     * const Folder = await prisma.folder.delete({
     *   where: {
     *     // ... filter to delete one Folder
     *   }
     * })
     * 
     */
    delete<T extends FolderDeleteArgs>(args: SelectSubset<T, FolderDeleteArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Folder.
     * @param {FolderUpdateArgs} args - Arguments to update one Folder.
     * @example
     * // Update one Folder
     * const folder = await prisma.folder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FolderUpdateArgs>(args: SelectSubset<T, FolderUpdateArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Folders.
     * @param {FolderDeleteManyArgs} args - Arguments to filter Folders to delete.
     * @example
     * // Delete a few Folders
     * const { count } = await prisma.folder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FolderDeleteManyArgs>(args?: SelectSubset<T, FolderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FolderUpdateManyArgs>(args: SelectSubset<T, FolderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders and returns the data updated in the database.
     * @param {FolderUpdateManyAndReturnArgs} args - Arguments to update many Folders.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Folders and only return the `id`
     * const folderWithIdOnly = await prisma.folder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FolderUpdateManyAndReturnArgs>(args: SelectSubset<T, FolderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Folder.
     * @param {FolderUpsertArgs} args - Arguments to update or create a Folder.
     * @example
     * // Update or create a Folder
     * const folder = await prisma.folder.upsert({
     *   create: {
     *     // ... data to create a Folder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Folder we want to update
     *   }
     * })
     */
    upsert<T extends FolderUpsertArgs>(args: SelectSubset<T, FolderUpsertArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderCountArgs} args - Arguments to filter Folders to count.
     * @example
     * // Count the number of Folders
     * const count = await prisma.folder.count({
     *   where: {
     *     // ... the filter for the Folders we want to count
     *   }
     * })
    **/
    count<T extends FolderCountArgs>(
      args?: Subset<T, FolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FolderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FolderAggregateArgs>(args: Subset<T, FolderAggregateArgs>): Prisma.PrismaPromise<GetFolderAggregateType<T>>

    /**
     * Group by Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FolderGroupByArgs['orderBy'] }
        : { orderBy?: FolderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FolderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFolderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Folder model
   */
  readonly fields: FolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Folder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FolderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tests<T extends Folder$testsArgs<ExtArgs> = {}>(args?: Subset<T, Folder$testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teacher<T extends Folder$teacherArgs<ExtArgs> = {}>(args?: Subset<T, Folder$teacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Folder model
   */
  interface FolderFieldRefs {
    readonly id: FieldRef<"Folder", 'String'>
    readonly name: FieldRef<"Folder", 'String'>
    readonly teacherId: FieldRef<"Folder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Folder findUnique
   */
  export type FolderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder findUniqueOrThrow
   */
  export type FolderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder findFirst
   */
  export type FolderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder findFirstOrThrow
   */
  export type FolderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder findMany
   */
  export type FolderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folders to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder create
   */
  export type FolderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The data needed to create a Folder.
     */
    data: XOR<FolderCreateInput, FolderUncheckedCreateInput>
  }

  /**
   * Folder createMany
   */
  export type FolderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Folder createManyAndReturn
   */
  export type FolderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Folder update
   */
  export type FolderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The data needed to update a Folder.
     */
    data: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>
    /**
     * Choose, which Folder to update.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder updateMany
   */
  export type FolderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to update.
     */
    limit?: number
  }

  /**
   * Folder updateManyAndReturn
   */
  export type FolderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Folder upsert
   */
  export type FolderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The filter to search for the Folder to update in case it exists.
     */
    where: FolderWhereUniqueInput
    /**
     * In case the Folder found by the `where` argument doesn't exist, create a new Folder with this data.
     */
    create: XOR<FolderCreateInput, FolderUncheckedCreateInput>
    /**
     * In case the Folder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>
  }

  /**
   * Folder delete
   */
  export type FolderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter which Folder to delete.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder deleteMany
   */
  export type FolderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folders to delete
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to delete.
     */
    limit?: number
  }

  /**
   * Folder.tests
   */
  export type Folder$testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    cursor?: TestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Folder.teacher
   */
  export type Folder$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * Folder without action
   */
  export type FolderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.Status | null
    viewAccess: boolean | null
    subject: $Enums.Subject | null
    lastActivity: Date | null
    teacherId: string | null
    groupId: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.Status | null
    viewAccess: boolean | null
    subject: $Enums.Subject | null
    lastActivity: Date | null
    teacherId: string | null
    groupId: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    status: number
    viewAccess: number
    subject: number
    lastActivity: number
    teacherId: number
    groupId: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    viewAccess?: true
    subject?: true
    lastActivity?: true
    teacherId?: true
    groupId?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    viewAccess?: true
    subject?: true
    lastActivity?: true
    teacherId?: true
    groupId?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    viewAccess?: true
    subject?: true
    lastActivity?: true
    teacherId?: true
    groupId?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    status: $Enums.Status
    viewAccess: boolean
    subject: $Enums.Subject | null
    lastActivity: Date | null
    teacherId: string
    groupId: string | null
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    viewAccess?: boolean
    subject?: boolean
    lastActivity?: boolean
    teacherId?: boolean
    groupId?: boolean
    scores?: boolean | Student$scoresArgs<ExtArgs>
    assignedTests?: boolean | Student$assignedTestsArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | Student$groupArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    viewAccess?: boolean
    subject?: boolean
    lastActivity?: boolean
    teacherId?: boolean
    groupId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | Student$groupArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    viewAccess?: boolean
    subject?: boolean
    lastActivity?: boolean
    teacherId?: boolean
    groupId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | Student$groupArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    viewAccess?: boolean
    subject?: boolean
    lastActivity?: boolean
    teacherId?: boolean
    groupId?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt" | "status" | "viewAccess" | "subject" | "lastActivity" | "teacherId" | "groupId", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | Student$scoresArgs<ExtArgs>
    assignedTests?: boolean | Student$assignedTestsArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | Student$groupArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | Student$groupArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    group?: boolean | Student$groupArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      scores: Prisma.$StudentScorePayload<ExtArgs>[]
      assignedTests: Prisma.$AssignedTestPayload<ExtArgs>[]
      teacher: Prisma.$TeacherPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
      status: $Enums.Status
      viewAccess: boolean
      subject: $Enums.Subject | null
      lastActivity: Date | null
      teacherId: string
      groupId: string | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scores<T extends Student$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Student$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTests<T extends Student$assignedTestsArgs<ExtArgs> = {}>(args?: Subset<T, Student$assignedTestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignedTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends Student$groupArgs<ExtArgs> = {}>(args?: Subset<T, Student$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly password: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
    readonly status: FieldRef<"Student", 'Status'>
    readonly viewAccess: FieldRef<"Student", 'Boolean'>
    readonly subject: FieldRef<"Student", 'Subject'>
    readonly lastActivity: FieldRef<"Student", 'DateTime'>
    readonly teacherId: FieldRef<"Student", 'String'>
    readonly groupId: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.scores
   */
  export type Student$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentScore
     */
    select?: StudentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentScore
     */
    omit?: StudentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentScoreInclude<ExtArgs> | null
    where?: StudentScoreWhereInput
    orderBy?: StudentScoreOrderByWithRelationInput | StudentScoreOrderByWithRelationInput[]
    cursor?: StudentScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScoreScalarFieldEnum | StudentScoreScalarFieldEnum[]
  }

  /**
   * Student.assignedTests
   */
  export type Student$assignedTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTest
     */
    select?: AssignedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTest
     */
    omit?: AssignedTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTestInclude<ExtArgs> | null
    where?: AssignedTestWhereInput
    orderBy?: AssignedTestOrderByWithRelationInput | AssignedTestOrderByWithRelationInput[]
    cursor?: AssignedTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignedTestScalarFieldEnum | AssignedTestScalarFieldEnum[]
  }

  /**
   * Student.group
   */
  export type Student$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model StudentScore
   */

  export type AggregateStudentScore = {
    _count: StudentScoreCountAggregateOutputType | null
    _avg: StudentScoreAvgAggregateOutputType | null
    _sum: StudentScoreSumAggregateOutputType | null
    _min: StudentScoreMinAggregateOutputType | null
    _max: StudentScoreMaxAggregateOutputType | null
  }

  export type StudentScoreAvgAggregateOutputType = {
    score: number | null
    maxScore: number | null
  }

  export type StudentScoreSumAggregateOutputType = {
    score: number | null
    maxScore: number | null
  }

  export type StudentScoreMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    testId: string | null
    score: number | null
    maxScore: number | null
    testName: string | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentScoreMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    testId: string | null
    score: number | null
    maxScore: number | null
    testName: string | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentScoreCountAggregateOutputType = {
    id: number
    studentId: number
    testId: number
    score: number
    maxScore: number
    testName: number
    studentTest: number
    isCompleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentScoreAvgAggregateInputType = {
    score?: true
    maxScore?: true
  }

  export type StudentScoreSumAggregateInputType = {
    score?: true
    maxScore?: true
  }

  export type StudentScoreMinAggregateInputType = {
    id?: true
    studentId?: true
    testId?: true
    score?: true
    maxScore?: true
    testName?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentScoreMaxAggregateInputType = {
    id?: true
    studentId?: true
    testId?: true
    score?: true
    maxScore?: true
    testName?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentScoreCountAggregateInputType = {
    id?: true
    studentId?: true
    testId?: true
    score?: true
    maxScore?: true
    testName?: true
    studentTest?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentScore to aggregate.
     */
    where?: StudentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentScores to fetch.
     */
    orderBy?: StudentScoreOrderByWithRelationInput | StudentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentScores
    **/
    _count?: true | StudentScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentScoreMaxAggregateInputType
  }

  export type GetStudentScoreAggregateType<T extends StudentScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentScore[P]>
      : GetScalarType<T[P], AggregateStudentScore[P]>
  }




  export type StudentScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentScoreWhereInput
    orderBy?: StudentScoreOrderByWithAggregationInput | StudentScoreOrderByWithAggregationInput[]
    by: StudentScoreScalarFieldEnum[] | StudentScoreScalarFieldEnum
    having?: StudentScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentScoreCountAggregateInputType | true
    _avg?: StudentScoreAvgAggregateInputType
    _sum?: StudentScoreSumAggregateInputType
    _min?: StudentScoreMinAggregateInputType
    _max?: StudentScoreMaxAggregateInputType
  }

  export type StudentScoreGroupByOutputType = {
    id: string
    studentId: string
    testId: string
    score: number
    maxScore: number
    testName: string
    studentTest: JsonValue | null
    isCompleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: StudentScoreCountAggregateOutputType | null
    _avg: StudentScoreAvgAggregateOutputType | null
    _sum: StudentScoreSumAggregateOutputType | null
    _min: StudentScoreMinAggregateOutputType | null
    _max: StudentScoreMaxAggregateOutputType | null
  }

  type GetStudentScoreGroupByPayload<T extends StudentScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentScoreGroupByOutputType[P]>
            : GetScalarType<T[P], StudentScoreGroupByOutputType[P]>
        }
      >
    >


  export type StudentScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    testId?: boolean
    score?: boolean
    maxScore?: boolean
    testName?: boolean
    studentTest?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentScore"]>

  export type StudentScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    testId?: boolean
    score?: boolean
    maxScore?: boolean
    testName?: boolean
    studentTest?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentScore"]>

  export type StudentScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    testId?: boolean
    score?: boolean
    maxScore?: boolean
    testName?: boolean
    studentTest?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentScore"]>

  export type StudentScoreSelectScalar = {
    id?: boolean
    studentId?: boolean
    testId?: boolean
    score?: boolean
    maxScore?: boolean
    testName?: boolean
    studentTest?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "testId" | "score" | "maxScore" | "testName" | "studentTest" | "isCompleted" | "createdAt" | "updatedAt", ExtArgs["result"]["studentScore"]>
  export type StudentScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }
  export type StudentScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }
  export type StudentScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }

  export type $StudentScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentScore"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      test: Prisma.$TestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      testId: string
      score: number
      maxScore: number
      testName: string
      studentTest: Prisma.JsonValue | null
      isCompleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentScore"]>
    composites: {}
  }

  type StudentScoreGetPayload<S extends boolean | null | undefined | StudentScoreDefaultArgs> = $Result.GetResult<Prisma.$StudentScorePayload, S>

  type StudentScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentScoreCountAggregateInputType | true
    }

  export interface StudentScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentScore'], meta: { name: 'StudentScore' } }
    /**
     * Find zero or one StudentScore that matches the filter.
     * @param {StudentScoreFindUniqueArgs} args - Arguments to find a StudentScore
     * @example
     * // Get one StudentScore
     * const studentScore = await prisma.studentScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentScoreFindUniqueArgs>(args: SelectSubset<T, StudentScoreFindUniqueArgs<ExtArgs>>): Prisma__StudentScoreClient<$Result.GetResult<Prisma.$StudentScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentScoreFindUniqueOrThrowArgs} args - Arguments to find a StudentScore
     * @example
     * // Get one StudentScore
     * const studentScore = await prisma.studentScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentScoreClient<$Result.GetResult<Prisma.$StudentScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentScoreFindFirstArgs} args - Arguments to find a StudentScore
     * @example
     * // Get one StudentScore
     * const studentScore = await prisma.studentScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentScoreFindFirstArgs>(args?: SelectSubset<T, StudentScoreFindFirstArgs<ExtArgs>>): Prisma__StudentScoreClient<$Result.GetResult<Prisma.$StudentScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentScoreFindFirstOrThrowArgs} args - Arguments to find a StudentScore
     * @example
     * // Get one StudentScore
     * const studentScore = await prisma.studentScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentScoreClient<$Result.GetResult<Prisma.$StudentScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentScores
     * const studentScores = await prisma.studentScore.findMany()
     * 
     * // Get first 10 StudentScores
     * const studentScores = await prisma.studentScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentScoreWithIdOnly = await prisma.studentScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentScoreFindManyArgs>(args?: SelectSubset<T, StudentScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentScore.
     * @param {StudentScoreCreateArgs} args - Arguments to create a StudentScore.
     * @example
     * // Create one StudentScore
     * const StudentScore = await prisma.studentScore.create({
     *   data: {
     *     // ... data to create a StudentScore
     *   }
     * })
     * 
     */
    create<T extends StudentScoreCreateArgs>(args: SelectSubset<T, StudentScoreCreateArgs<ExtArgs>>): Prisma__StudentScoreClient<$Result.GetResult<Prisma.$StudentScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentScores.
     * @param {StudentScoreCreateManyArgs} args - Arguments to create many StudentScores.
     * @example
     * // Create many StudentScores
     * const studentScore = await prisma.studentScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentScoreCreateManyArgs>(args?: SelectSubset<T, StudentScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentScores and returns the data saved in the database.
     * @param {StudentScoreCreateManyAndReturnArgs} args - Arguments to create many StudentScores.
     * @example
     * // Create many StudentScores
     * const studentScore = await prisma.studentScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentScores and only return the `id`
     * const studentScoreWithIdOnly = await prisma.studentScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentScore.
     * @param {StudentScoreDeleteArgs} args - Arguments to delete one StudentScore.
     * @example
     * // Delete one StudentScore
     * const StudentScore = await prisma.studentScore.delete({
     *   where: {
     *     // ... filter to delete one StudentScore
     *   }
     * })
     * 
     */
    delete<T extends StudentScoreDeleteArgs>(args: SelectSubset<T, StudentScoreDeleteArgs<ExtArgs>>): Prisma__StudentScoreClient<$Result.GetResult<Prisma.$StudentScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentScore.
     * @param {StudentScoreUpdateArgs} args - Arguments to update one StudentScore.
     * @example
     * // Update one StudentScore
     * const studentScore = await prisma.studentScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentScoreUpdateArgs>(args: SelectSubset<T, StudentScoreUpdateArgs<ExtArgs>>): Prisma__StudentScoreClient<$Result.GetResult<Prisma.$StudentScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentScores.
     * @param {StudentScoreDeleteManyArgs} args - Arguments to filter StudentScores to delete.
     * @example
     * // Delete a few StudentScores
     * const { count } = await prisma.studentScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentScoreDeleteManyArgs>(args?: SelectSubset<T, StudentScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentScores
     * const studentScore = await prisma.studentScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentScoreUpdateManyArgs>(args: SelectSubset<T, StudentScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentScores and returns the data updated in the database.
     * @param {StudentScoreUpdateManyAndReturnArgs} args - Arguments to update many StudentScores.
     * @example
     * // Update many StudentScores
     * const studentScore = await prisma.studentScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentScores and only return the `id`
     * const studentScoreWithIdOnly = await prisma.studentScore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentScore.
     * @param {StudentScoreUpsertArgs} args - Arguments to update or create a StudentScore.
     * @example
     * // Update or create a StudentScore
     * const studentScore = await prisma.studentScore.upsert({
     *   create: {
     *     // ... data to create a StudentScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentScore we want to update
     *   }
     * })
     */
    upsert<T extends StudentScoreUpsertArgs>(args: SelectSubset<T, StudentScoreUpsertArgs<ExtArgs>>): Prisma__StudentScoreClient<$Result.GetResult<Prisma.$StudentScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentScoreCountArgs} args - Arguments to filter StudentScores to count.
     * @example
     * // Count the number of StudentScores
     * const count = await prisma.studentScore.count({
     *   where: {
     *     // ... the filter for the StudentScores we want to count
     *   }
     * })
    **/
    count<T extends StudentScoreCountArgs>(
      args?: Subset<T, StudentScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentScoreAggregateArgs>(args: Subset<T, StudentScoreAggregateArgs>): Prisma.PrismaPromise<GetStudentScoreAggregateType<T>>

    /**
     * Group by StudentScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentScoreGroupByArgs['orderBy'] }
        : { orderBy?: StudentScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentScore model
   */
  readonly fields: StudentScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    test<T extends TestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestDefaultArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentScore model
   */
  interface StudentScoreFieldRefs {
    readonly id: FieldRef<"StudentScore", 'String'>
    readonly studentId: FieldRef<"StudentScore", 'String'>
    readonly testId: FieldRef<"StudentScore", 'String'>
    readonly score: FieldRef<"StudentScore", 'Int'>
    readonly maxScore: FieldRef<"StudentScore", 'Int'>
    readonly testName: FieldRef<"StudentScore", 'String'>
    readonly studentTest: FieldRef<"StudentScore", 'Json'>
    readonly isCompleted: FieldRef<"StudentScore", 'Boolean'>
    readonly createdAt: FieldRef<"StudentScore", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentScore findUnique
   */
  export type StudentScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentScore
     */
    select?: StudentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentScore
     */
    omit?: StudentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentScoreInclude<ExtArgs> | null
    /**
     * Filter, which StudentScore to fetch.
     */
    where: StudentScoreWhereUniqueInput
  }

  /**
   * StudentScore findUniqueOrThrow
   */
  export type StudentScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentScore
     */
    select?: StudentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentScore
     */
    omit?: StudentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentScoreInclude<ExtArgs> | null
    /**
     * Filter, which StudentScore to fetch.
     */
    where: StudentScoreWhereUniqueInput
  }

  /**
   * StudentScore findFirst
   */
  export type StudentScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentScore
     */
    select?: StudentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentScore
     */
    omit?: StudentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentScoreInclude<ExtArgs> | null
    /**
     * Filter, which StudentScore to fetch.
     */
    where?: StudentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentScores to fetch.
     */
    orderBy?: StudentScoreOrderByWithRelationInput | StudentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentScores.
     */
    cursor?: StudentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentScores.
     */
    distinct?: StudentScoreScalarFieldEnum | StudentScoreScalarFieldEnum[]
  }

  /**
   * StudentScore findFirstOrThrow
   */
  export type StudentScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentScore
     */
    select?: StudentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentScore
     */
    omit?: StudentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentScoreInclude<ExtArgs> | null
    /**
     * Filter, which StudentScore to fetch.
     */
    where?: StudentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentScores to fetch.
     */
    orderBy?: StudentScoreOrderByWithRelationInput | StudentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentScores.
     */
    cursor?: StudentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentScores.
     */
    distinct?: StudentScoreScalarFieldEnum | StudentScoreScalarFieldEnum[]
  }

  /**
   * StudentScore findMany
   */
  export type StudentScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentScore
     */
    select?: StudentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentScore
     */
    omit?: StudentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentScoreInclude<ExtArgs> | null
    /**
     * Filter, which StudentScores to fetch.
     */
    where?: StudentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentScores to fetch.
     */
    orderBy?: StudentScoreOrderByWithRelationInput | StudentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentScores.
     */
    cursor?: StudentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentScores.
     */
    skip?: number
    distinct?: StudentScoreScalarFieldEnum | StudentScoreScalarFieldEnum[]
  }

  /**
   * StudentScore create
   */
  export type StudentScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentScore
     */
    select?: StudentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentScore
     */
    omit?: StudentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentScore.
     */
    data: XOR<StudentScoreCreateInput, StudentScoreUncheckedCreateInput>
  }

  /**
   * StudentScore createMany
   */
  export type StudentScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentScores.
     */
    data: StudentScoreCreateManyInput | StudentScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentScore createManyAndReturn
   */
  export type StudentScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentScore
     */
    select?: StudentScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentScore
     */
    omit?: StudentScoreOmit<ExtArgs> | null
    /**
     * The data used to create many StudentScores.
     */
    data: StudentScoreCreateManyInput | StudentScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentScore update
   */
  export type StudentScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentScore
     */
    select?: StudentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentScore
     */
    omit?: StudentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentScore.
     */
    data: XOR<StudentScoreUpdateInput, StudentScoreUncheckedUpdateInput>
    /**
     * Choose, which StudentScore to update.
     */
    where: StudentScoreWhereUniqueInput
  }

  /**
   * StudentScore updateMany
   */
  export type StudentScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentScores.
     */
    data: XOR<StudentScoreUpdateManyMutationInput, StudentScoreUncheckedUpdateManyInput>
    /**
     * Filter which StudentScores to update
     */
    where?: StudentScoreWhereInput
    /**
     * Limit how many StudentScores to update.
     */
    limit?: number
  }

  /**
   * StudentScore updateManyAndReturn
   */
  export type StudentScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentScore
     */
    select?: StudentScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentScore
     */
    omit?: StudentScoreOmit<ExtArgs> | null
    /**
     * The data used to update StudentScores.
     */
    data: XOR<StudentScoreUpdateManyMutationInput, StudentScoreUncheckedUpdateManyInput>
    /**
     * Filter which StudentScores to update
     */
    where?: StudentScoreWhereInput
    /**
     * Limit how many StudentScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentScore upsert
   */
  export type StudentScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentScore
     */
    select?: StudentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentScore
     */
    omit?: StudentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentScore to update in case it exists.
     */
    where: StudentScoreWhereUniqueInput
    /**
     * In case the StudentScore found by the `where` argument doesn't exist, create a new StudentScore with this data.
     */
    create: XOR<StudentScoreCreateInput, StudentScoreUncheckedCreateInput>
    /**
     * In case the StudentScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentScoreUpdateInput, StudentScoreUncheckedUpdateInput>
  }

  /**
   * StudentScore delete
   */
  export type StudentScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentScore
     */
    select?: StudentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentScore
     */
    omit?: StudentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentScoreInclude<ExtArgs> | null
    /**
     * Filter which StudentScore to delete.
     */
    where: StudentScoreWhereUniqueInput
  }

  /**
   * StudentScore deleteMany
   */
  export type StudentScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentScores to delete
     */
    where?: StudentScoreWhereInput
    /**
     * Limit how many StudentScores to delete.
     */
    limit?: number
  }

  /**
   * StudentScore without action
   */
  export type StudentScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentScore
     */
    select?: StudentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentScore
     */
    omit?: StudentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentScoreInclude<ExtArgs> | null
  }


  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    timeLimit: number | null
  }

  export type TestSumAggregateOutputType = {
    timeLimit: number | null
  }

  export type TestMinAggregateOutputType = {
    id: string | null
    title: string | null
    timeLimit: number | null
    description: string | null
    score: string | null
    startTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    testTYpe: string | null
    testTheme: string | null
    teacherId: string | null
    adminID: string | null
    status: $Enums.TestStatus | null
    subTopicId: string | null
    groupId: string | null
    folderId: string | null
  }

  export type TestMaxAggregateOutputType = {
    id: string | null
    title: string | null
    timeLimit: number | null
    description: string | null
    score: string | null
    startTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    testTYpe: string | null
    testTheme: string | null
    teacherId: string | null
    adminID: string | null
    status: $Enums.TestStatus | null
    subTopicId: string | null
    groupId: string | null
    folderId: string | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    title: number
    timeLimit: number
    description: number
    score: number
    startTime: number
    createdAt: number
    updatedAt: number
    testTYpe: number
    testTheme: number
    teacherId: number
    adminID: number
    status: number
    subTopicId: number
    groupId: number
    folderId: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    timeLimit?: true
  }

  export type TestSumAggregateInputType = {
    timeLimit?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    title?: true
    timeLimit?: true
    description?: true
    score?: true
    startTime?: true
    createdAt?: true
    updatedAt?: true
    testTYpe?: true
    testTheme?: true
    teacherId?: true
    adminID?: true
    status?: true
    subTopicId?: true
    groupId?: true
    folderId?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    title?: true
    timeLimit?: true
    description?: true
    score?: true
    startTime?: true
    createdAt?: true
    updatedAt?: true
    testTYpe?: true
    testTheme?: true
    teacherId?: true
    adminID?: true
    status?: true
    subTopicId?: true
    groupId?: true
    folderId?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    title?: true
    timeLimit?: true
    description?: true
    score?: true
    startTime?: true
    createdAt?: true
    updatedAt?: true
    testTYpe?: true
    testTheme?: true
    teacherId?: true
    adminID?: true
    status?: true
    subTopicId?: true
    groupId?: true
    folderId?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: string
    title: string | null
    timeLimit: number | null
    description: string | null
    score: string | null
    startTime: Date | null
    createdAt: Date
    updatedAt: Date
    testTYpe: string | null
    testTheme: string | null
    teacherId: string | null
    adminID: string | null
    status: $Enums.TestStatus
    subTopicId: string | null
    groupId: string | null
    folderId: string | null
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    timeLimit?: boolean
    description?: boolean
    score?: boolean
    startTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    testTYpe?: boolean
    testTheme?: boolean
    teacherId?: boolean
    adminID?: boolean
    status?: boolean
    subTopicId?: boolean
    groupId?: boolean
    folderId?: boolean
    teacher?: boolean | Test$teacherArgs<ExtArgs>
    admin?: boolean | Test$adminArgs<ExtArgs>
    tasks?: boolean | Test$tasksArgs<ExtArgs>
    studentScores?: boolean | Test$studentScoresArgs<ExtArgs>
    assignedTo?: boolean | Test$assignedToArgs<ExtArgs>
    subTopic?: boolean | Test$subTopicArgs<ExtArgs>
    group?: boolean | Test$groupArgs<ExtArgs>
    folder?: boolean | Test$folderArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    timeLimit?: boolean
    description?: boolean
    score?: boolean
    startTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    testTYpe?: boolean
    testTheme?: boolean
    teacherId?: boolean
    adminID?: boolean
    status?: boolean
    subTopicId?: boolean
    groupId?: boolean
    folderId?: boolean
    teacher?: boolean | Test$teacherArgs<ExtArgs>
    admin?: boolean | Test$adminArgs<ExtArgs>
    subTopic?: boolean | Test$subTopicArgs<ExtArgs>
    group?: boolean | Test$groupArgs<ExtArgs>
    folder?: boolean | Test$folderArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    timeLimit?: boolean
    description?: boolean
    score?: boolean
    startTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    testTYpe?: boolean
    testTheme?: boolean
    teacherId?: boolean
    adminID?: boolean
    status?: boolean
    subTopicId?: boolean
    groupId?: boolean
    folderId?: boolean
    teacher?: boolean | Test$teacherArgs<ExtArgs>
    admin?: boolean | Test$adminArgs<ExtArgs>
    subTopic?: boolean | Test$subTopicArgs<ExtArgs>
    group?: boolean | Test$groupArgs<ExtArgs>
    folder?: boolean | Test$folderArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    id?: boolean
    title?: boolean
    timeLimit?: boolean
    description?: boolean
    score?: boolean
    startTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    testTYpe?: boolean
    testTheme?: boolean
    teacherId?: boolean
    adminID?: boolean
    status?: boolean
    subTopicId?: boolean
    groupId?: boolean
    folderId?: boolean
  }

  export type TestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "timeLimit" | "description" | "score" | "startTime" | "createdAt" | "updatedAt" | "testTYpe" | "testTheme" | "teacherId" | "adminID" | "status" | "subTopicId" | "groupId" | "folderId", ExtArgs["result"]["test"]>
  export type TestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | Test$teacherArgs<ExtArgs>
    admin?: boolean | Test$adminArgs<ExtArgs>
    tasks?: boolean | Test$tasksArgs<ExtArgs>
    studentScores?: boolean | Test$studentScoresArgs<ExtArgs>
    assignedTo?: boolean | Test$assignedToArgs<ExtArgs>
    subTopic?: boolean | Test$subTopicArgs<ExtArgs>
    group?: boolean | Test$groupArgs<ExtArgs>
    folder?: boolean | Test$folderArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | Test$teacherArgs<ExtArgs>
    admin?: boolean | Test$adminArgs<ExtArgs>
    subTopic?: boolean | Test$subTopicArgs<ExtArgs>
    group?: boolean | Test$groupArgs<ExtArgs>
    folder?: boolean | Test$folderArgs<ExtArgs>
  }
  export type TestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | Test$teacherArgs<ExtArgs>
    admin?: boolean | Test$adminArgs<ExtArgs>
    subTopic?: boolean | Test$subTopicArgs<ExtArgs>
    group?: boolean | Test$groupArgs<ExtArgs>
    folder?: boolean | Test$folderArgs<ExtArgs>
  }

  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      studentScores: Prisma.$StudentScorePayload<ExtArgs>[]
      assignedTo: Prisma.$AssignedTestPayload<ExtArgs>[]
      subTopic: Prisma.$SubTopicPayload<ExtArgs> | null
      group: Prisma.$GroupPayload<ExtArgs> | null
      folder: Prisma.$FolderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      timeLimit: number | null
      description: string | null
      score: string | null
      startTime: Date | null
      createdAt: Date
      updatedAt: Date
      testTYpe: string | null
      testTheme: string | null
      teacherId: string | null
      adminID: string | null
      status: $Enums.TestStatus
      subTopicId: string | null
      groupId: string | null
      folderId: string | null
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestFindUniqueArgs>(args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestFindFirstArgs>(args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestFindManyArgs>(args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends TestCreateArgs>(args: SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {TestCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCreateManyArgs>(args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {TestCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends TestDeleteArgs>(args: SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestUpdateArgs>(args: SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDeleteManyArgs>(args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestUpdateManyArgs>(args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests and returns the data updated in the database.
     * @param {TestUpdateManyAndReturnArgs} args - Arguments to update many Tests.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestUpdateManyAndReturnArgs>(args: SelectSubset<T, TestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends TestUpsertArgs>(args: SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends Test$teacherArgs<ExtArgs> = {}>(args?: Subset<T, Test$teacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admin<T extends Test$adminArgs<ExtArgs> = {}>(args?: Subset<T, Test$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Test$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Test$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentScores<T extends Test$studentScoresArgs<ExtArgs> = {}>(args?: Subset<T, Test$studentScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTo<T extends Test$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Test$assignedToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignedTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subTopic<T extends Test$subTopicArgs<ExtArgs> = {}>(args?: Subset<T, Test$subTopicArgs<ExtArgs>>): Prisma__SubTopicClient<$Result.GetResult<Prisma.$SubTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    group<T extends Test$groupArgs<ExtArgs> = {}>(args?: Subset<T, Test$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    folder<T extends Test$folderArgs<ExtArgs> = {}>(args?: Subset<T, Test$folderArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Test model
   */
  interface TestFieldRefs {
    readonly id: FieldRef<"Test", 'String'>
    readonly title: FieldRef<"Test", 'String'>
    readonly timeLimit: FieldRef<"Test", 'Int'>
    readonly description: FieldRef<"Test", 'String'>
    readonly score: FieldRef<"Test", 'String'>
    readonly startTime: FieldRef<"Test", 'DateTime'>
    readonly createdAt: FieldRef<"Test", 'DateTime'>
    readonly updatedAt: FieldRef<"Test", 'DateTime'>
    readonly testTYpe: FieldRef<"Test", 'String'>
    readonly testTheme: FieldRef<"Test", 'String'>
    readonly teacherId: FieldRef<"Test", 'String'>
    readonly adminID: FieldRef<"Test", 'String'>
    readonly status: FieldRef<"Test", 'TestStatus'>
    readonly subTopicId: FieldRef<"Test", 'String'>
    readonly groupId: FieldRef<"Test", 'String'>
    readonly folderId: FieldRef<"Test", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test createManyAndReturn
   */
  export type TestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test updateManyAndReturn
   */
  export type TestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }

  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to delete.
     */
    limit?: number
  }

  /**
   * Test.teacher
   */
  export type Test$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * Test.admin
   */
  export type Test$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Test.tasks
   */
  export type Test$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Test.studentScores
   */
  export type Test$studentScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentScore
     */
    select?: StudentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentScore
     */
    omit?: StudentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentScoreInclude<ExtArgs> | null
    where?: StudentScoreWhereInput
    orderBy?: StudentScoreOrderByWithRelationInput | StudentScoreOrderByWithRelationInput[]
    cursor?: StudentScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScoreScalarFieldEnum | StudentScoreScalarFieldEnum[]
  }

  /**
   * Test.assignedTo
   */
  export type Test$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTest
     */
    select?: AssignedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTest
     */
    omit?: AssignedTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTestInclude<ExtArgs> | null
    where?: AssignedTestWhereInput
    orderBy?: AssignedTestOrderByWithRelationInput | AssignedTestOrderByWithRelationInput[]
    cursor?: AssignedTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignedTestScalarFieldEnum | AssignedTestScalarFieldEnum[]
  }

  /**
   * Test.subTopic
   */
  export type Test$subTopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTopic
     */
    select?: SubTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTopic
     */
    omit?: SubTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTopicInclude<ExtArgs> | null
    where?: SubTopicWhereInput
  }

  /**
   * Test.group
   */
  export type Test$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Test.folder
   */
  export type Test$folderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    where?: FolderWhereInput
  }

  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
  }


  /**
   * Model AssignedTest
   */

  export type AggregateAssignedTest = {
    _count: AssignedTestCountAggregateOutputType | null
    _min: AssignedTestMinAggregateOutputType | null
    _max: AssignedTestMaxAggregateOutputType | null
  }

  export type AssignedTestMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    groupId: string | null
    testId: string | null
    assignedAt: Date | null
    endTime: Date | null
  }

  export type AssignedTestMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    groupId: string | null
    testId: string | null
    assignedAt: Date | null
    endTime: Date | null
  }

  export type AssignedTestCountAggregateOutputType = {
    id: number
    studentId: number
    groupId: number
    testId: number
    assignedAt: number
    endTime: number
    _all: number
  }


  export type AssignedTestMinAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    testId?: true
    assignedAt?: true
    endTime?: true
  }

  export type AssignedTestMaxAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    testId?: true
    assignedAt?: true
    endTime?: true
  }

  export type AssignedTestCountAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
    testId?: true
    assignedAt?: true
    endTime?: true
    _all?: true
  }

  export type AssignedTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignedTest to aggregate.
     */
    where?: AssignedTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignedTests to fetch.
     */
    orderBy?: AssignedTestOrderByWithRelationInput | AssignedTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignedTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignedTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignedTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssignedTests
    **/
    _count?: true | AssignedTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignedTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignedTestMaxAggregateInputType
  }

  export type GetAssignedTestAggregateType<T extends AssignedTestAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignedTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignedTest[P]>
      : GetScalarType<T[P], AggregateAssignedTest[P]>
  }




  export type AssignedTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignedTestWhereInput
    orderBy?: AssignedTestOrderByWithAggregationInput | AssignedTestOrderByWithAggregationInput[]
    by: AssignedTestScalarFieldEnum[] | AssignedTestScalarFieldEnum
    having?: AssignedTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignedTestCountAggregateInputType | true
    _min?: AssignedTestMinAggregateInputType
    _max?: AssignedTestMaxAggregateInputType
  }

  export type AssignedTestGroupByOutputType = {
    id: string
    studentId: string | null
    groupId: string | null
    testId: string
    assignedAt: Date
    endTime: Date | null
    _count: AssignedTestCountAggregateOutputType | null
    _min: AssignedTestMinAggregateOutputType | null
    _max: AssignedTestMaxAggregateOutputType | null
  }

  type GetAssignedTestGroupByPayload<T extends AssignedTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignedTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignedTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignedTestGroupByOutputType[P]>
            : GetScalarType<T[P], AssignedTestGroupByOutputType[P]>
        }
      >
    >


  export type AssignedTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    testId?: boolean
    assignedAt?: boolean
    endTime?: boolean
    student?: boolean | AssignedTest$studentArgs<ExtArgs>
    group?: boolean | AssignedTest$groupArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignedTest"]>

  export type AssignedTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    testId?: boolean
    assignedAt?: boolean
    endTime?: boolean
    student?: boolean | AssignedTest$studentArgs<ExtArgs>
    group?: boolean | AssignedTest$groupArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignedTest"]>

  export type AssignedTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    testId?: boolean
    assignedAt?: boolean
    endTime?: boolean
    student?: boolean | AssignedTest$studentArgs<ExtArgs>
    group?: boolean | AssignedTest$groupArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignedTest"]>

  export type AssignedTestSelectScalar = {
    id?: boolean
    studentId?: boolean
    groupId?: boolean
    testId?: boolean
    assignedAt?: boolean
    endTime?: boolean
  }

  export type AssignedTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "groupId" | "testId" | "assignedAt" | "endTime", ExtArgs["result"]["assignedTest"]>
  export type AssignedTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | AssignedTest$studentArgs<ExtArgs>
    group?: boolean | AssignedTest$groupArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }
  export type AssignedTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | AssignedTest$studentArgs<ExtArgs>
    group?: boolean | AssignedTest$groupArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }
  export type AssignedTestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | AssignedTest$studentArgs<ExtArgs>
    group?: boolean | AssignedTest$groupArgs<ExtArgs>
    test?: boolean | TestDefaultArgs<ExtArgs>
  }

  export type $AssignedTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssignedTest"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs> | null
      group: Prisma.$GroupPayload<ExtArgs> | null
      test: Prisma.$TestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string | null
      groupId: string | null
      testId: string
      assignedAt: Date
      endTime: Date | null
    }, ExtArgs["result"]["assignedTest"]>
    composites: {}
  }

  type AssignedTestGetPayload<S extends boolean | null | undefined | AssignedTestDefaultArgs> = $Result.GetResult<Prisma.$AssignedTestPayload, S>

  type AssignedTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignedTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignedTestCountAggregateInputType | true
    }

  export interface AssignedTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssignedTest'], meta: { name: 'AssignedTest' } }
    /**
     * Find zero or one AssignedTest that matches the filter.
     * @param {AssignedTestFindUniqueArgs} args - Arguments to find a AssignedTest
     * @example
     * // Get one AssignedTest
     * const assignedTest = await prisma.assignedTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignedTestFindUniqueArgs>(args: SelectSubset<T, AssignedTestFindUniqueArgs<ExtArgs>>): Prisma__AssignedTestClient<$Result.GetResult<Prisma.$AssignedTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssignedTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignedTestFindUniqueOrThrowArgs} args - Arguments to find a AssignedTest
     * @example
     * // Get one AssignedTest
     * const assignedTest = await prisma.assignedTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignedTestFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignedTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignedTestClient<$Result.GetResult<Prisma.$AssignedTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignedTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTestFindFirstArgs} args - Arguments to find a AssignedTest
     * @example
     * // Get one AssignedTest
     * const assignedTest = await prisma.assignedTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignedTestFindFirstArgs>(args?: SelectSubset<T, AssignedTestFindFirstArgs<ExtArgs>>): Prisma__AssignedTestClient<$Result.GetResult<Prisma.$AssignedTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignedTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTestFindFirstOrThrowArgs} args - Arguments to find a AssignedTest
     * @example
     * // Get one AssignedTest
     * const assignedTest = await prisma.assignedTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignedTestFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignedTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignedTestClient<$Result.GetResult<Prisma.$AssignedTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssignedTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssignedTests
     * const assignedTests = await prisma.assignedTest.findMany()
     * 
     * // Get first 10 AssignedTests
     * const assignedTests = await prisma.assignedTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignedTestWithIdOnly = await prisma.assignedTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignedTestFindManyArgs>(args?: SelectSubset<T, AssignedTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignedTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssignedTest.
     * @param {AssignedTestCreateArgs} args - Arguments to create a AssignedTest.
     * @example
     * // Create one AssignedTest
     * const AssignedTest = await prisma.assignedTest.create({
     *   data: {
     *     // ... data to create a AssignedTest
     *   }
     * })
     * 
     */
    create<T extends AssignedTestCreateArgs>(args: SelectSubset<T, AssignedTestCreateArgs<ExtArgs>>): Prisma__AssignedTestClient<$Result.GetResult<Prisma.$AssignedTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssignedTests.
     * @param {AssignedTestCreateManyArgs} args - Arguments to create many AssignedTests.
     * @example
     * // Create many AssignedTests
     * const assignedTest = await prisma.assignedTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignedTestCreateManyArgs>(args?: SelectSubset<T, AssignedTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssignedTests and returns the data saved in the database.
     * @param {AssignedTestCreateManyAndReturnArgs} args - Arguments to create many AssignedTests.
     * @example
     * // Create many AssignedTests
     * const assignedTest = await prisma.assignedTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssignedTests and only return the `id`
     * const assignedTestWithIdOnly = await prisma.assignedTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignedTestCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignedTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignedTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssignedTest.
     * @param {AssignedTestDeleteArgs} args - Arguments to delete one AssignedTest.
     * @example
     * // Delete one AssignedTest
     * const AssignedTest = await prisma.assignedTest.delete({
     *   where: {
     *     // ... filter to delete one AssignedTest
     *   }
     * })
     * 
     */
    delete<T extends AssignedTestDeleteArgs>(args: SelectSubset<T, AssignedTestDeleteArgs<ExtArgs>>): Prisma__AssignedTestClient<$Result.GetResult<Prisma.$AssignedTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssignedTest.
     * @param {AssignedTestUpdateArgs} args - Arguments to update one AssignedTest.
     * @example
     * // Update one AssignedTest
     * const assignedTest = await prisma.assignedTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignedTestUpdateArgs>(args: SelectSubset<T, AssignedTestUpdateArgs<ExtArgs>>): Prisma__AssignedTestClient<$Result.GetResult<Prisma.$AssignedTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssignedTests.
     * @param {AssignedTestDeleteManyArgs} args - Arguments to filter AssignedTests to delete.
     * @example
     * // Delete a few AssignedTests
     * const { count } = await prisma.assignedTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignedTestDeleteManyArgs>(args?: SelectSubset<T, AssignedTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignedTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssignedTests
     * const assignedTest = await prisma.assignedTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignedTestUpdateManyArgs>(args: SelectSubset<T, AssignedTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignedTests and returns the data updated in the database.
     * @param {AssignedTestUpdateManyAndReturnArgs} args - Arguments to update many AssignedTests.
     * @example
     * // Update many AssignedTests
     * const assignedTest = await prisma.assignedTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssignedTests and only return the `id`
     * const assignedTestWithIdOnly = await prisma.assignedTest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignedTestUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignedTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignedTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssignedTest.
     * @param {AssignedTestUpsertArgs} args - Arguments to update or create a AssignedTest.
     * @example
     * // Update or create a AssignedTest
     * const assignedTest = await prisma.assignedTest.upsert({
     *   create: {
     *     // ... data to create a AssignedTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssignedTest we want to update
     *   }
     * })
     */
    upsert<T extends AssignedTestUpsertArgs>(args: SelectSubset<T, AssignedTestUpsertArgs<ExtArgs>>): Prisma__AssignedTestClient<$Result.GetResult<Prisma.$AssignedTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssignedTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTestCountArgs} args - Arguments to filter AssignedTests to count.
     * @example
     * // Count the number of AssignedTests
     * const count = await prisma.assignedTest.count({
     *   where: {
     *     // ... the filter for the AssignedTests we want to count
     *   }
     * })
    **/
    count<T extends AssignedTestCountArgs>(
      args?: Subset<T, AssignedTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignedTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssignedTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignedTestAggregateArgs>(args: Subset<T, AssignedTestAggregateArgs>): Prisma.PrismaPromise<GetAssignedTestAggregateType<T>>

    /**
     * Group by AssignedTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignedTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignedTestGroupByArgs['orderBy'] }
        : { orderBy?: AssignedTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignedTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignedTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssignedTest model
   */
  readonly fields: AssignedTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssignedTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignedTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends AssignedTest$studentArgs<ExtArgs> = {}>(args?: Subset<T, AssignedTest$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    group<T extends AssignedTest$groupArgs<ExtArgs> = {}>(args?: Subset<T, AssignedTest$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    test<T extends TestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestDefaultArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssignedTest model
   */
  interface AssignedTestFieldRefs {
    readonly id: FieldRef<"AssignedTest", 'String'>
    readonly studentId: FieldRef<"AssignedTest", 'String'>
    readonly groupId: FieldRef<"AssignedTest", 'String'>
    readonly testId: FieldRef<"AssignedTest", 'String'>
    readonly assignedAt: FieldRef<"AssignedTest", 'DateTime'>
    readonly endTime: FieldRef<"AssignedTest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssignedTest findUnique
   */
  export type AssignedTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTest
     */
    select?: AssignedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTest
     */
    omit?: AssignedTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTestInclude<ExtArgs> | null
    /**
     * Filter, which AssignedTest to fetch.
     */
    where: AssignedTestWhereUniqueInput
  }

  /**
   * AssignedTest findUniqueOrThrow
   */
  export type AssignedTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTest
     */
    select?: AssignedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTest
     */
    omit?: AssignedTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTestInclude<ExtArgs> | null
    /**
     * Filter, which AssignedTest to fetch.
     */
    where: AssignedTestWhereUniqueInput
  }

  /**
   * AssignedTest findFirst
   */
  export type AssignedTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTest
     */
    select?: AssignedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTest
     */
    omit?: AssignedTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTestInclude<ExtArgs> | null
    /**
     * Filter, which AssignedTest to fetch.
     */
    where?: AssignedTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignedTests to fetch.
     */
    orderBy?: AssignedTestOrderByWithRelationInput | AssignedTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignedTests.
     */
    cursor?: AssignedTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignedTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignedTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignedTests.
     */
    distinct?: AssignedTestScalarFieldEnum | AssignedTestScalarFieldEnum[]
  }

  /**
   * AssignedTest findFirstOrThrow
   */
  export type AssignedTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTest
     */
    select?: AssignedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTest
     */
    omit?: AssignedTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTestInclude<ExtArgs> | null
    /**
     * Filter, which AssignedTest to fetch.
     */
    where?: AssignedTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignedTests to fetch.
     */
    orderBy?: AssignedTestOrderByWithRelationInput | AssignedTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignedTests.
     */
    cursor?: AssignedTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignedTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignedTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignedTests.
     */
    distinct?: AssignedTestScalarFieldEnum | AssignedTestScalarFieldEnum[]
  }

  /**
   * AssignedTest findMany
   */
  export type AssignedTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTest
     */
    select?: AssignedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTest
     */
    omit?: AssignedTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTestInclude<ExtArgs> | null
    /**
     * Filter, which AssignedTests to fetch.
     */
    where?: AssignedTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignedTests to fetch.
     */
    orderBy?: AssignedTestOrderByWithRelationInput | AssignedTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssignedTests.
     */
    cursor?: AssignedTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignedTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignedTests.
     */
    skip?: number
    distinct?: AssignedTestScalarFieldEnum | AssignedTestScalarFieldEnum[]
  }

  /**
   * AssignedTest create
   */
  export type AssignedTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTest
     */
    select?: AssignedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTest
     */
    omit?: AssignedTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTestInclude<ExtArgs> | null
    /**
     * The data needed to create a AssignedTest.
     */
    data: XOR<AssignedTestCreateInput, AssignedTestUncheckedCreateInput>
  }

  /**
   * AssignedTest createMany
   */
  export type AssignedTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssignedTests.
     */
    data: AssignedTestCreateManyInput | AssignedTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssignedTest createManyAndReturn
   */
  export type AssignedTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTest
     */
    select?: AssignedTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTest
     */
    omit?: AssignedTestOmit<ExtArgs> | null
    /**
     * The data used to create many AssignedTests.
     */
    data: AssignedTestCreateManyInput | AssignedTestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssignedTest update
   */
  export type AssignedTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTest
     */
    select?: AssignedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTest
     */
    omit?: AssignedTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTestInclude<ExtArgs> | null
    /**
     * The data needed to update a AssignedTest.
     */
    data: XOR<AssignedTestUpdateInput, AssignedTestUncheckedUpdateInput>
    /**
     * Choose, which AssignedTest to update.
     */
    where: AssignedTestWhereUniqueInput
  }

  /**
   * AssignedTest updateMany
   */
  export type AssignedTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssignedTests.
     */
    data: XOR<AssignedTestUpdateManyMutationInput, AssignedTestUncheckedUpdateManyInput>
    /**
     * Filter which AssignedTests to update
     */
    where?: AssignedTestWhereInput
    /**
     * Limit how many AssignedTests to update.
     */
    limit?: number
  }

  /**
   * AssignedTest updateManyAndReturn
   */
  export type AssignedTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTest
     */
    select?: AssignedTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTest
     */
    omit?: AssignedTestOmit<ExtArgs> | null
    /**
     * The data used to update AssignedTests.
     */
    data: XOR<AssignedTestUpdateManyMutationInput, AssignedTestUncheckedUpdateManyInput>
    /**
     * Filter which AssignedTests to update
     */
    where?: AssignedTestWhereInput
    /**
     * Limit how many AssignedTests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssignedTest upsert
   */
  export type AssignedTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTest
     */
    select?: AssignedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTest
     */
    omit?: AssignedTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTestInclude<ExtArgs> | null
    /**
     * The filter to search for the AssignedTest to update in case it exists.
     */
    where: AssignedTestWhereUniqueInput
    /**
     * In case the AssignedTest found by the `where` argument doesn't exist, create a new AssignedTest with this data.
     */
    create: XOR<AssignedTestCreateInput, AssignedTestUncheckedCreateInput>
    /**
     * In case the AssignedTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignedTestUpdateInput, AssignedTestUncheckedUpdateInput>
  }

  /**
   * AssignedTest delete
   */
  export type AssignedTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTest
     */
    select?: AssignedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTest
     */
    omit?: AssignedTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTestInclude<ExtArgs> | null
    /**
     * Filter which AssignedTest to delete.
     */
    where: AssignedTestWhereUniqueInput
  }

  /**
   * AssignedTest deleteMany
   */
  export type AssignedTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignedTests to delete
     */
    where?: AssignedTestWhereInput
    /**
     * Limit how many AssignedTests to delete.
     */
    limit?: number
  }

  /**
   * AssignedTest.student
   */
  export type AssignedTest$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * AssignedTest.group
   */
  export type AssignedTest$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * AssignedTest without action
   */
  export type AssignedTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTest
     */
    select?: AssignedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTest
     */
    omit?: AssignedTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTestInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    number: string | null
    image: string | null
    type: string | null
    isSaved: boolean | null
    testId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    number: string | null
    image: string | null
    type: string | null
    isSaved: boolean | null
    testId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    number: number
    image: number
    type: number
    isSaved: number
    userAnsewer: number
    pairs: number
    answers: number
    testId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    number?: true
    image?: true
    type?: true
    isSaved?: true
    testId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    number?: true
    image?: true
    type?: true
    isSaved?: true
    testId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    number?: true
    image?: true
    type?: true
    isSaved?: true
    userAnsewer?: true
    pairs?: true
    answers?: true
    testId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    number: string
    image: string | null
    type: string | null
    isSaved: boolean | null
    userAnsewer: JsonValue | null
    pairs: JsonValue | null
    answers: JsonValue | null
    testId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    number?: boolean
    image?: boolean
    type?: boolean
    isSaved?: boolean
    userAnsewer?: boolean
    pairs?: boolean
    answers?: boolean
    testId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    test?: boolean | Task$testArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    number?: boolean
    image?: boolean
    type?: boolean
    isSaved?: boolean
    userAnsewer?: boolean
    pairs?: boolean
    answers?: boolean
    testId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    test?: boolean | Task$testArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    number?: boolean
    image?: boolean
    type?: boolean
    isSaved?: boolean
    userAnsewer?: boolean
    pairs?: boolean
    answers?: boolean
    testId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    test?: boolean | Task$testArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    number?: boolean
    image?: boolean
    type?: boolean
    isSaved?: boolean
    userAnsewer?: boolean
    pairs?: boolean
    answers?: boolean
    testId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "number" | "image" | "type" | "isSaved" | "userAnsewer" | "pairs" | "answers" | "testId" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | Task$testArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | Task$testArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | Task$testArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      test: Prisma.$TestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      number: string
      image: string | null
      type: string | null
      isSaved: boolean | null
      userAnsewer: Prisma.JsonValue | null
      pairs: Prisma.JsonValue | null
      answers: Prisma.JsonValue | null
      testId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test<T extends Task$testArgs<ExtArgs> = {}>(args?: Subset<T, Task$testArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly number: FieldRef<"Task", 'String'>
    readonly image: FieldRef<"Task", 'String'>
    readonly type: FieldRef<"Task", 'String'>
    readonly isSaved: FieldRef<"Task", 'Boolean'>
    readonly userAnsewer: FieldRef<"Task", 'Json'>
    readonly pairs: FieldRef<"Task", 'Json'>
    readonly answers: FieldRef<"Task", 'Json'>
    readonly testId: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.test
   */
  export type Task$testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    dayOfWeek: number | null
    hours: number | null
    minutes: number | null
    duration: number | null
    weeks: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    dayOfWeek: number | null
    hours: number | null
    minutes: number | null
    duration: number | null
    weeks: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    title: string | null
    dayOfWeek: number | null
    hours: number | null
    minutes: number | null
    duration: number | null
    weeks: number | null
    teacherId: string | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    dayOfWeek: number | null
    hours: number | null
    minutes: number | null
    duration: number | null
    weeks: number | null
    teacherId: string | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    title: number
    dayOfWeek: number
    hours: number
    minutes: number
    duration: number
    weeks: number
    teacherId: number
    exceptions: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    dayOfWeek?: true
    hours?: true
    minutes?: true
    duration?: true
    weeks?: true
  }

  export type ScheduleSumAggregateInputType = {
    dayOfWeek?: true
    hours?: true
    minutes?: true
    duration?: true
    weeks?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    title?: true
    dayOfWeek?: true
    hours?: true
    minutes?: true
    duration?: true
    weeks?: true
    teacherId?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    title?: true
    dayOfWeek?: true
    hours?: true
    minutes?: true
    duration?: true
    weeks?: true
    teacherId?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    title?: true
    dayOfWeek?: true
    hours?: true
    minutes?: true
    duration?: true
    weeks?: true
    teacherId?: true
    exceptions?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    title: string
    dayOfWeek: number
    hours: number
    minutes: number
    duration: number
    weeks: number | null
    teacherId: string
    exceptions: JsonValue | null
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    dayOfWeek?: boolean
    hours?: boolean
    minutes?: boolean
    duration?: boolean
    weeks?: boolean
    teacherId?: boolean
    exceptions?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    dayOfWeek?: boolean
    hours?: boolean
    minutes?: boolean
    duration?: boolean
    weeks?: boolean
    teacherId?: boolean
    exceptions?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    dayOfWeek?: boolean
    hours?: boolean
    minutes?: boolean
    duration?: boolean
    weeks?: boolean
    teacherId?: boolean
    exceptions?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    title?: boolean
    dayOfWeek?: boolean
    hours?: boolean
    minutes?: boolean
    duration?: boolean
    weeks?: boolean
    teacherId?: boolean
    exceptions?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "dayOfWeek" | "hours" | "minutes" | "duration" | "weeks" | "teacherId" | "exceptions", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      dayOfWeek: number
      hours: number
      minutes: number
      duration: number
      weeks: number | null
      teacherId: string
      exceptions: Prisma.JsonValue | null
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly title: FieldRef<"Schedule", 'String'>
    readonly dayOfWeek: FieldRef<"Schedule", 'Int'>
    readonly hours: FieldRef<"Schedule", 'Int'>
    readonly minutes: FieldRef<"Schedule", 'Int'>
    readonly duration: FieldRef<"Schedule", 'Int'>
    readonly weeks: FieldRef<"Schedule", 'Int'>
    readonly teacherId: FieldRef<"Schedule", 'String'>
    readonly exceptions: FieldRef<"Schedule", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    title: string | null
    teacherId: string | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    title: string | null
    teacherId: string | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    title: number
    teacherId: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    title?: true
    teacherId?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    title?: true
    teacherId?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    title?: true
    teacherId?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    title: string
    teacherId: string
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    teacherId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    students?: boolean | Group$studentsArgs<ExtArgs>
    tests?: boolean | Group$testsArgs<ExtArgs>
    assignedTests?: boolean | Group$assignedTestsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    teacherId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    teacherId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    title?: boolean
    teacherId?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "teacherId", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    students?: boolean | Group$studentsArgs<ExtArgs>
    tests?: boolean | Group$testsArgs<ExtArgs>
    assignedTests?: boolean | Group$assignedTestsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
      students: Prisma.$StudentPayload<ExtArgs>[]
      tests: Prisma.$TestPayload<ExtArgs>[]
      assignedTests: Prisma.$AssignedTestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      teacherId: string
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Group$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Group$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tests<T extends Group$testsArgs<ExtArgs> = {}>(args?: Subset<T, Group$testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTests<T extends Group$assignedTestsArgs<ExtArgs> = {}>(args?: Subset<T, Group$assignedTestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignedTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly title: FieldRef<"Group", 'String'>
    readonly teacherId: FieldRef<"Group", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.students
   */
  export type Group$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Group.tests
   */
  export type Group$testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    cursor?: TestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Group.assignedTests
   */
  export type Group$assignedTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTest
     */
    select?: AssignedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTest
     */
    omit?: AssignedTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTestInclude<ExtArgs> | null
    where?: AssignedTestWhereInput
    orderBy?: AssignedTestOrderByWithRelationInput | AssignedTestOrderByWithRelationInput[]
    cursor?: AssignedTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignedTestScalarFieldEnum | AssignedTestScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model EmailVerificationCode
   */

  export type AggregateEmailVerificationCode = {
    _count: EmailVerificationCodeCountAggregateOutputType | null
    _min: EmailVerificationCodeMinAggregateOutputType | null
    _max: EmailVerificationCodeMaxAggregateOutputType | null
  }

  export type EmailVerificationCodeMinAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    expiresAt: Date | null
  }

  export type EmailVerificationCodeMaxAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    expiresAt: Date | null
  }

  export type EmailVerificationCodeCountAggregateOutputType = {
    id: number
    email: number
    code: number
    expiresAt: number
    _all: number
  }


  export type EmailVerificationCodeMinAggregateInputType = {
    id?: true
    email?: true
    code?: true
    expiresAt?: true
  }

  export type EmailVerificationCodeMaxAggregateInputType = {
    id?: true
    email?: true
    code?: true
    expiresAt?: true
  }

  export type EmailVerificationCodeCountAggregateInputType = {
    id?: true
    email?: true
    code?: true
    expiresAt?: true
    _all?: true
  }

  export type EmailVerificationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationCode to aggregate.
     */
    where?: EmailVerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationCodes to fetch.
     */
    orderBy?: EmailVerificationCodeOrderByWithRelationInput | EmailVerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerificationCodes
    **/
    _count?: true | EmailVerificationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationCodeMaxAggregateInputType
  }

  export type GetEmailVerificationCodeAggregateType<T extends EmailVerificationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerificationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerificationCode[P]>
      : GetScalarType<T[P], AggregateEmailVerificationCode[P]>
  }




  export type EmailVerificationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationCodeWhereInput
    orderBy?: EmailVerificationCodeOrderByWithAggregationInput | EmailVerificationCodeOrderByWithAggregationInput[]
    by: EmailVerificationCodeScalarFieldEnum[] | EmailVerificationCodeScalarFieldEnum
    having?: EmailVerificationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationCodeCountAggregateInputType | true
    _min?: EmailVerificationCodeMinAggregateInputType
    _max?: EmailVerificationCodeMaxAggregateInputType
  }

  export type EmailVerificationCodeGroupByOutputType = {
    id: string
    email: string
    code: string
    expiresAt: Date
    _count: EmailVerificationCodeCountAggregateOutputType | null
    _min: EmailVerificationCodeMinAggregateOutputType | null
    _max: EmailVerificationCodeMaxAggregateOutputType | null
  }

  type GetEmailVerificationCodeGroupByPayload<T extends EmailVerificationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationCodeGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["emailVerificationCode"]>

  export type EmailVerificationCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["emailVerificationCode"]>

  export type EmailVerificationCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["emailVerificationCode"]>

  export type EmailVerificationCodeSelectScalar = {
    id?: boolean
    email?: boolean
    code?: boolean
    expiresAt?: boolean
  }

  export type EmailVerificationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "code" | "expiresAt", ExtArgs["result"]["emailVerificationCode"]>

  export type $EmailVerificationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerificationCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      code: string
      expiresAt: Date
    }, ExtArgs["result"]["emailVerificationCode"]>
    composites: {}
  }

  type EmailVerificationCodeGetPayload<S extends boolean | null | undefined | EmailVerificationCodeDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationCodePayload, S>

  type EmailVerificationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationCodeCountAggregateInputType | true
    }

  export interface EmailVerificationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerificationCode'], meta: { name: 'EmailVerificationCode' } }
    /**
     * Find zero or one EmailVerificationCode that matches the filter.
     * @param {EmailVerificationCodeFindUniqueArgs} args - Arguments to find a EmailVerificationCode
     * @example
     * // Get one EmailVerificationCode
     * const emailVerificationCode = await prisma.emailVerificationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationCodeFindUniqueArgs>(args: SelectSubset<T, EmailVerificationCodeFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationCodeClient<$Result.GetResult<Prisma.$EmailVerificationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailVerificationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationCodeFindUniqueOrThrowArgs} args - Arguments to find a EmailVerificationCode
     * @example
     * // Get one EmailVerificationCode
     * const emailVerificationCode = await prisma.emailVerificationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationCodeClient<$Result.GetResult<Prisma.$EmailVerificationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationCodeFindFirstArgs} args - Arguments to find a EmailVerificationCode
     * @example
     * // Get one EmailVerificationCode
     * const emailVerificationCode = await prisma.emailVerificationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationCodeFindFirstArgs>(args?: SelectSubset<T, EmailVerificationCodeFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationCodeClient<$Result.GetResult<Prisma.$EmailVerificationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationCodeFindFirstOrThrowArgs} args - Arguments to find a EmailVerificationCode
     * @example
     * // Get one EmailVerificationCode
     * const emailVerificationCode = await prisma.emailVerificationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationCodeClient<$Result.GetResult<Prisma.$EmailVerificationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailVerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerificationCodes
     * const emailVerificationCodes = await prisma.emailVerificationCode.findMany()
     * 
     * // Get first 10 EmailVerificationCodes
     * const emailVerificationCodes = await prisma.emailVerificationCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationCodeWithIdOnly = await prisma.emailVerificationCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationCodeFindManyArgs>(args?: SelectSubset<T, EmailVerificationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailVerificationCode.
     * @param {EmailVerificationCodeCreateArgs} args - Arguments to create a EmailVerificationCode.
     * @example
     * // Create one EmailVerificationCode
     * const EmailVerificationCode = await prisma.emailVerificationCode.create({
     *   data: {
     *     // ... data to create a EmailVerificationCode
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationCodeCreateArgs>(args: SelectSubset<T, EmailVerificationCodeCreateArgs<ExtArgs>>): Prisma__EmailVerificationCodeClient<$Result.GetResult<Prisma.$EmailVerificationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailVerificationCodes.
     * @param {EmailVerificationCodeCreateManyArgs} args - Arguments to create many EmailVerificationCodes.
     * @example
     * // Create many EmailVerificationCodes
     * const emailVerificationCode = await prisma.emailVerificationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationCodeCreateManyArgs>(args?: SelectSubset<T, EmailVerificationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerificationCodes and returns the data saved in the database.
     * @param {EmailVerificationCodeCreateManyAndReturnArgs} args - Arguments to create many EmailVerificationCodes.
     * @example
     * // Create many EmailVerificationCodes
     * const emailVerificationCode = await prisma.emailVerificationCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerificationCodes and only return the `id`
     * const emailVerificationCodeWithIdOnly = await prisma.emailVerificationCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailVerificationCode.
     * @param {EmailVerificationCodeDeleteArgs} args - Arguments to delete one EmailVerificationCode.
     * @example
     * // Delete one EmailVerificationCode
     * const EmailVerificationCode = await prisma.emailVerificationCode.delete({
     *   where: {
     *     // ... filter to delete one EmailVerificationCode
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationCodeDeleteArgs>(args: SelectSubset<T, EmailVerificationCodeDeleteArgs<ExtArgs>>): Prisma__EmailVerificationCodeClient<$Result.GetResult<Prisma.$EmailVerificationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailVerificationCode.
     * @param {EmailVerificationCodeUpdateArgs} args - Arguments to update one EmailVerificationCode.
     * @example
     * // Update one EmailVerificationCode
     * const emailVerificationCode = await prisma.emailVerificationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationCodeUpdateArgs>(args: SelectSubset<T, EmailVerificationCodeUpdateArgs<ExtArgs>>): Prisma__EmailVerificationCodeClient<$Result.GetResult<Prisma.$EmailVerificationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailVerificationCodes.
     * @param {EmailVerificationCodeDeleteManyArgs} args - Arguments to filter EmailVerificationCodes to delete.
     * @example
     * // Delete a few EmailVerificationCodes
     * const { count } = await prisma.emailVerificationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationCodeDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerificationCodes
     * const emailVerificationCode = await prisma.emailVerificationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationCodeUpdateManyArgs>(args: SelectSubset<T, EmailVerificationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationCodes and returns the data updated in the database.
     * @param {EmailVerificationCodeUpdateManyAndReturnArgs} args - Arguments to update many EmailVerificationCodes.
     * @example
     * // Update many EmailVerificationCodes
     * const emailVerificationCode = await prisma.emailVerificationCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailVerificationCodes and only return the `id`
     * const emailVerificationCodeWithIdOnly = await prisma.emailVerificationCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailVerificationCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailVerificationCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailVerificationCode.
     * @param {EmailVerificationCodeUpsertArgs} args - Arguments to update or create a EmailVerificationCode.
     * @example
     * // Update or create a EmailVerificationCode
     * const emailVerificationCode = await prisma.emailVerificationCode.upsert({
     *   create: {
     *     // ... data to create a EmailVerificationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerificationCode we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationCodeUpsertArgs>(args: SelectSubset<T, EmailVerificationCodeUpsertArgs<ExtArgs>>): Prisma__EmailVerificationCodeClient<$Result.GetResult<Prisma.$EmailVerificationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailVerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationCodeCountArgs} args - Arguments to filter EmailVerificationCodes to count.
     * @example
     * // Count the number of EmailVerificationCodes
     * const count = await prisma.emailVerificationCode.count({
     *   where: {
     *     // ... the filter for the EmailVerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationCodeCountArgs>(
      args?: Subset<T, EmailVerificationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailVerificationCodeAggregateArgs>(args: Subset<T, EmailVerificationCodeAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationCodeAggregateType<T>>

    /**
     * Group by EmailVerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailVerificationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationCodeGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailVerificationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerificationCode model
   */
  readonly fields: EmailVerificationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerificationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailVerificationCode model
   */
  interface EmailVerificationCodeFieldRefs {
    readonly id: FieldRef<"EmailVerificationCode", 'String'>
    readonly email: FieldRef<"EmailVerificationCode", 'String'>
    readonly code: FieldRef<"EmailVerificationCode", 'String'>
    readonly expiresAt: FieldRef<"EmailVerificationCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerificationCode findUnique
   */
  export type EmailVerificationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationCode
     */
    select?: EmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationCode
     */
    omit?: EmailVerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerificationCode to fetch.
     */
    where: EmailVerificationCodeWhereUniqueInput
  }

  /**
   * EmailVerificationCode findUniqueOrThrow
   */
  export type EmailVerificationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationCode
     */
    select?: EmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationCode
     */
    omit?: EmailVerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerificationCode to fetch.
     */
    where: EmailVerificationCodeWhereUniqueInput
  }

  /**
   * EmailVerificationCode findFirst
   */
  export type EmailVerificationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationCode
     */
    select?: EmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationCode
     */
    omit?: EmailVerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerificationCode to fetch.
     */
    where?: EmailVerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationCodes to fetch.
     */
    orderBy?: EmailVerificationCodeOrderByWithRelationInput | EmailVerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationCodes.
     */
    cursor?: EmailVerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationCodes.
     */
    distinct?: EmailVerificationCodeScalarFieldEnum | EmailVerificationCodeScalarFieldEnum[]
  }

  /**
   * EmailVerificationCode findFirstOrThrow
   */
  export type EmailVerificationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationCode
     */
    select?: EmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationCode
     */
    omit?: EmailVerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerificationCode to fetch.
     */
    where?: EmailVerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationCodes to fetch.
     */
    orderBy?: EmailVerificationCodeOrderByWithRelationInput | EmailVerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationCodes.
     */
    cursor?: EmailVerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationCodes.
     */
    distinct?: EmailVerificationCodeScalarFieldEnum | EmailVerificationCodeScalarFieldEnum[]
  }

  /**
   * EmailVerificationCode findMany
   */
  export type EmailVerificationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationCode
     */
    select?: EmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationCode
     */
    omit?: EmailVerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerificationCodes to fetch.
     */
    where?: EmailVerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationCodes to fetch.
     */
    orderBy?: EmailVerificationCodeOrderByWithRelationInput | EmailVerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerificationCodes.
     */
    cursor?: EmailVerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationCodes.
     */
    skip?: number
    distinct?: EmailVerificationCodeScalarFieldEnum | EmailVerificationCodeScalarFieldEnum[]
  }

  /**
   * EmailVerificationCode create
   */
  export type EmailVerificationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationCode
     */
    select?: EmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationCode
     */
    omit?: EmailVerificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailVerificationCode.
     */
    data: XOR<EmailVerificationCodeCreateInput, EmailVerificationCodeUncheckedCreateInput>
  }

  /**
   * EmailVerificationCode createMany
   */
  export type EmailVerificationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerificationCodes.
     */
    data: EmailVerificationCodeCreateManyInput | EmailVerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerificationCode createManyAndReturn
   */
  export type EmailVerificationCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationCode
     */
    select?: EmailVerificationCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationCode
     */
    omit?: EmailVerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to create many EmailVerificationCodes.
     */
    data: EmailVerificationCodeCreateManyInput | EmailVerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerificationCode update
   */
  export type EmailVerificationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationCode
     */
    select?: EmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationCode
     */
    omit?: EmailVerificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailVerificationCode.
     */
    data: XOR<EmailVerificationCodeUpdateInput, EmailVerificationCodeUncheckedUpdateInput>
    /**
     * Choose, which EmailVerificationCode to update.
     */
    where: EmailVerificationCodeWhereUniqueInput
  }

  /**
   * EmailVerificationCode updateMany
   */
  export type EmailVerificationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerificationCodes.
     */
    data: XOR<EmailVerificationCodeUpdateManyMutationInput, EmailVerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationCodes to update
     */
    where?: EmailVerificationCodeWhereInput
    /**
     * Limit how many EmailVerificationCodes to update.
     */
    limit?: number
  }

  /**
   * EmailVerificationCode updateManyAndReturn
   */
  export type EmailVerificationCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationCode
     */
    select?: EmailVerificationCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationCode
     */
    omit?: EmailVerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to update EmailVerificationCodes.
     */
    data: XOR<EmailVerificationCodeUpdateManyMutationInput, EmailVerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationCodes to update
     */
    where?: EmailVerificationCodeWhereInput
    /**
     * Limit how many EmailVerificationCodes to update.
     */
    limit?: number
  }

  /**
   * EmailVerificationCode upsert
   */
  export type EmailVerificationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationCode
     */
    select?: EmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationCode
     */
    omit?: EmailVerificationCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailVerificationCode to update in case it exists.
     */
    where: EmailVerificationCodeWhereUniqueInput
    /**
     * In case the EmailVerificationCode found by the `where` argument doesn't exist, create a new EmailVerificationCode with this data.
     */
    create: XOR<EmailVerificationCodeCreateInput, EmailVerificationCodeUncheckedCreateInput>
    /**
     * In case the EmailVerificationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationCodeUpdateInput, EmailVerificationCodeUncheckedUpdateInput>
  }

  /**
   * EmailVerificationCode delete
   */
  export type EmailVerificationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationCode
     */
    select?: EmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationCode
     */
    omit?: EmailVerificationCodeOmit<ExtArgs> | null
    /**
     * Filter which EmailVerificationCode to delete.
     */
    where: EmailVerificationCodeWhereUniqueInput
  }

  /**
   * EmailVerificationCode deleteMany
   */
  export type EmailVerificationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationCodes to delete
     */
    where?: EmailVerificationCodeWhereInput
    /**
     * Limit how many EmailVerificationCodes to delete.
     */
    limit?: number
  }

  /**
   * EmailVerificationCode without action
   */
  export type EmailVerificationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationCode
     */
    select?: EmailVerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationCode
     */
    omit?: EmailVerificationCodeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id',
    subjectType: 'subjectType',
    name: 'name',
    number: 'number',
    adminId: 'adminId',
    createdAt: 'createdAt'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const SubTopicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    number: 'number',
    topicId: 'topicId'
  };

  export type SubTopicScalarFieldEnum = (typeof SubTopicScalarFieldEnum)[keyof typeof SubTopicScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    isEmailVerified: 'isEmailVerified',
    phone: 'phone',
    password: 'password',
    subject: 'subject',
    plan: 'plan',
    subscriptionTime: 'subscriptionTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const FolderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    teacherId: 'teacherId'
  };

  export type FolderScalarFieldEnum = (typeof FolderScalarFieldEnum)[keyof typeof FolderScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    viewAccess: 'viewAccess',
    subject: 'subject',
    lastActivity: 'lastActivity',
    teacherId: 'teacherId',
    groupId: 'groupId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const StudentScoreScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    testId: 'testId',
    score: 'score',
    maxScore: 'maxScore',
    testName: 'testName',
    studentTest: 'studentTest',
    isCompleted: 'isCompleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScoreScalarFieldEnum = (typeof StudentScoreScalarFieldEnum)[keyof typeof StudentScoreScalarFieldEnum]


  export const TestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    timeLimit: 'timeLimit',
    description: 'description',
    score: 'score',
    startTime: 'startTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    testTYpe: 'testTYpe',
    testTheme: 'testTheme',
    teacherId: 'teacherId',
    adminID: 'adminID',
    status: 'status',
    subTopicId: 'subTopicId',
    groupId: 'groupId',
    folderId: 'folderId'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const AssignedTestScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    groupId: 'groupId',
    testId: 'testId',
    assignedAt: 'assignedAt',
    endTime: 'endTime'
  };

  export type AssignedTestScalarFieldEnum = (typeof AssignedTestScalarFieldEnum)[keyof typeof AssignedTestScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    number: 'number',
    image: 'image',
    type: 'type',
    isSaved: 'isSaved',
    userAnsewer: 'userAnsewer',
    pairs: 'pairs',
    answers: 'answers',
    testId: 'testId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    dayOfWeek: 'dayOfWeek',
    hours: 'hours',
    minutes: 'minutes',
    duration: 'duration',
    weeks: 'weeks',
    teacherId: 'teacherId',
    exceptions: 'exceptions'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    title: 'title',
    teacherId: 'teacherId'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const EmailVerificationCodeScalarFieldEnum: {
    id: 'id',
    email: 'email',
    code: 'code',
    expiresAt: 'expiresAt'
  };

  export type EmailVerificationCodeScalarFieldEnum = (typeof EmailVerificationCodeScalarFieldEnum)[keyof typeof EmailVerificationCodeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Subject'
   */
  export type EnumSubjectFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Subject'>
    


  /**
   * Reference to a field of type 'Subject[]'
   */
  export type ListEnumSubjectFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Subject[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'TestStatus'
   */
  export type EnumTestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestStatus'>
    


  /**
   * Reference to a field of type 'TestStatus[]'
   */
  export type ListEnumTestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    status?: EnumStatusFilter<"Admin"> | $Enums.Status
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    topics?: TopicListRelationFilter
    tests?: TestListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    topics?: TopicOrderByRelationAggregateInput
    tests?: TestOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    status?: EnumStatusFilter<"Admin"> | $Enums.Status
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    topics?: TopicListRelationFilter
    tests?: TestListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    status?: EnumStatusWithAggregatesFilter<"Admin"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type TopicWhereInput = {
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    id?: StringFilter<"Topic"> | string
    subjectType?: StringFilter<"Topic"> | string
    name?: StringFilter<"Topic"> | string
    number?: StringFilter<"Topic"> | string
    adminId?: StringFilter<"Topic"> | string
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    subTopics?: SubTopicListRelationFilter
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    subjectType?: SortOrder
    name?: SortOrder
    number?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
    subTopics?: SubTopicOrderByRelationAggregateInput
  }

  export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    subjectType?: StringFilter<"Topic"> | string
    name?: StringFilter<"Topic"> | string
    number?: StringFilter<"Topic"> | string
    adminId?: StringFilter<"Topic"> | string
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    subTopics?: SubTopicListRelationFilter
  }, "id">

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    subjectType?: SortOrder
    name?: SortOrder
    number?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    _count?: TopicCountOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    OR?: TopicScalarWhereWithAggregatesInput[]
    NOT?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Topic"> | string
    subjectType?: StringWithAggregatesFilter<"Topic"> | string
    name?: StringWithAggregatesFilter<"Topic"> | string
    number?: StringWithAggregatesFilter<"Topic"> | string
    adminId?: StringWithAggregatesFilter<"Topic"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
  }

  export type SubTopicWhereInput = {
    AND?: SubTopicWhereInput | SubTopicWhereInput[]
    OR?: SubTopicWhereInput[]
    NOT?: SubTopicWhereInput | SubTopicWhereInput[]
    id?: StringFilter<"SubTopic"> | string
    name?: StringFilter<"SubTopic"> | string
    number?: StringFilter<"SubTopic"> | string
    topicId?: StringFilter<"SubTopic"> | string
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    tests?: TestListRelationFilter
  }

  export type SubTopicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    topicId?: SortOrder
    topic?: TopicOrderByWithRelationInput
    tests?: TestOrderByRelationAggregateInput
  }

  export type SubTopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubTopicWhereInput | SubTopicWhereInput[]
    OR?: SubTopicWhereInput[]
    NOT?: SubTopicWhereInput | SubTopicWhereInput[]
    name?: StringFilter<"SubTopic"> | string
    number?: StringFilter<"SubTopic"> | string
    topicId?: StringFilter<"SubTopic"> | string
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    tests?: TestListRelationFilter
  }, "id">

  export type SubTopicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    topicId?: SortOrder
    _count?: SubTopicCountOrderByAggregateInput
    _max?: SubTopicMaxOrderByAggregateInput
    _min?: SubTopicMinOrderByAggregateInput
  }

  export type SubTopicScalarWhereWithAggregatesInput = {
    AND?: SubTopicScalarWhereWithAggregatesInput | SubTopicScalarWhereWithAggregatesInput[]
    OR?: SubTopicScalarWhereWithAggregatesInput[]
    NOT?: SubTopicScalarWhereWithAggregatesInput | SubTopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubTopic"> | string
    name?: StringWithAggregatesFilter<"SubTopic"> | string
    number?: StringWithAggregatesFilter<"SubTopic"> | string
    topicId?: StringWithAggregatesFilter<"SubTopic"> | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: StringFilter<"Teacher"> | string
    name?: StringFilter<"Teacher"> | string
    email?: StringFilter<"Teacher"> | string
    isEmailVerified?: BoolFilter<"Teacher"> | boolean
    phone?: StringFilter<"Teacher"> | string
    password?: StringFilter<"Teacher"> | string
    subject?: EnumSubjectFilter<"Teacher"> | $Enums.Subject
    plan?: StringNullableFilter<"Teacher"> | string | null
    subscriptionTime?: StringNullableFilter<"Teacher"> | string | null
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    status?: EnumStatusFilter<"Teacher"> | $Enums.Status
    tests?: TestListRelationFilter
    students?: StudentListRelationFilter
    schedule?: ScheduleListRelationFilter
    groups?: GroupListRelationFilter
    folders?: FolderListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isEmailVerified?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    subject?: SortOrder
    plan?: SortOrderInput | SortOrder
    subscriptionTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    tests?: TestOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
    schedule?: ScheduleOrderByRelationAggregateInput
    groups?: GroupOrderByRelationAggregateInput
    folders?: FolderOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    name?: StringFilter<"Teacher"> | string
    isEmailVerified?: BoolFilter<"Teacher"> | boolean
    password?: StringFilter<"Teacher"> | string
    subject?: EnumSubjectFilter<"Teacher"> | $Enums.Subject
    plan?: StringNullableFilter<"Teacher"> | string | null
    subscriptionTime?: StringNullableFilter<"Teacher"> | string | null
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    status?: EnumStatusFilter<"Teacher"> | $Enums.Status
    tests?: TestListRelationFilter
    students?: StudentListRelationFilter
    schedule?: ScheduleListRelationFilter
    groups?: GroupListRelationFilter
    folders?: FolderListRelationFilter
  }, "id" | "email" | "phone">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isEmailVerified?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    subject?: SortOrder
    plan?: SortOrderInput | SortOrder
    subscriptionTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teacher"> | string
    name?: StringWithAggregatesFilter<"Teacher"> | string
    email?: StringWithAggregatesFilter<"Teacher"> | string
    isEmailVerified?: BoolWithAggregatesFilter<"Teacher"> | boolean
    phone?: StringWithAggregatesFilter<"Teacher"> | string
    password?: StringWithAggregatesFilter<"Teacher"> | string
    subject?: EnumSubjectWithAggregatesFilter<"Teacher"> | $Enums.Subject
    plan?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    subscriptionTime?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Teacher"> | $Enums.Status
  }

  export type FolderWhereInput = {
    AND?: FolderWhereInput | FolderWhereInput[]
    OR?: FolderWhereInput[]
    NOT?: FolderWhereInput | FolderWhereInput[]
    id?: StringFilter<"Folder"> | string
    name?: StringFilter<"Folder"> | string
    teacherId?: StringFilter<"Folder"> | string
    tests?: TestListRelationFilter
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
  }

  export type FolderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
    tests?: TestOrderByRelationAggregateInput
    teacher?: TeacherOrderByWithRelationInput
  }

  export type FolderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    folder_name_teacher_unique?: FolderFolder_name_teacher_uniqueCompoundUniqueInput
    AND?: FolderWhereInput | FolderWhereInput[]
    OR?: FolderWhereInput[]
    NOT?: FolderWhereInput | FolderWhereInput[]
    name?: StringFilter<"Folder"> | string
    teacherId?: StringFilter<"Folder"> | string
    tests?: TestListRelationFilter
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
  }, "id" | "folder_name_teacher_unique">

  export type FolderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
    _count?: FolderCountOrderByAggregateInput
    _max?: FolderMaxOrderByAggregateInput
    _min?: FolderMinOrderByAggregateInput
  }

  export type FolderScalarWhereWithAggregatesInput = {
    AND?: FolderScalarWhereWithAggregatesInput | FolderScalarWhereWithAggregatesInput[]
    OR?: FolderScalarWhereWithAggregatesInput[]
    NOT?: FolderScalarWhereWithAggregatesInput | FolderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Folder"> | string
    name?: StringWithAggregatesFilter<"Folder"> | string
    teacherId?: StringWithAggregatesFilter<"Folder"> | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    status?: EnumStatusFilter<"Student"> | $Enums.Status
    viewAccess?: BoolFilter<"Student"> | boolean
    subject?: EnumSubjectNullableFilter<"Student"> | $Enums.Subject | null
    lastActivity?: DateTimeNullableFilter<"Student"> | Date | string | null
    teacherId?: StringFilter<"Student"> | string
    groupId?: StringNullableFilter<"Student"> | string | null
    scores?: StudentScoreListRelationFilter
    assignedTests?: AssignedTestListRelationFilter
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    viewAccess?: SortOrder
    subject?: SortOrderInput | SortOrder
    lastActivity?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    scores?: StudentScoreOrderByRelationAggregateInput
    assignedTests?: AssignedTestOrderByRelationAggregateInput
    teacher?: TeacherOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    status?: EnumStatusFilter<"Student"> | $Enums.Status
    viewAccess?: BoolFilter<"Student"> | boolean
    subject?: EnumSubjectNullableFilter<"Student"> | $Enums.Subject | null
    lastActivity?: DateTimeNullableFilter<"Student"> | Date | string | null
    teacherId?: StringFilter<"Student"> | string
    groupId?: StringNullableFilter<"Student"> | string | null
    scores?: StudentScoreListRelationFilter
    assignedTests?: AssignedTestListRelationFilter
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }, "id" | "email">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    viewAccess?: SortOrder
    subject?: SortOrderInput | SortOrder
    lastActivity?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    password?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Student"> | $Enums.Status
    viewAccess?: BoolWithAggregatesFilter<"Student"> | boolean
    subject?: EnumSubjectNullableWithAggregatesFilter<"Student"> | $Enums.Subject | null
    lastActivity?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    teacherId?: StringWithAggregatesFilter<"Student"> | string
    groupId?: StringNullableWithAggregatesFilter<"Student"> | string | null
  }

  export type StudentScoreWhereInput = {
    AND?: StudentScoreWhereInput | StudentScoreWhereInput[]
    OR?: StudentScoreWhereInput[]
    NOT?: StudentScoreWhereInput | StudentScoreWhereInput[]
    id?: StringFilter<"StudentScore"> | string
    studentId?: StringFilter<"StudentScore"> | string
    testId?: StringFilter<"StudentScore"> | string
    score?: IntFilter<"StudentScore"> | number
    maxScore?: IntFilter<"StudentScore"> | number
    testName?: StringFilter<"StudentScore"> | string
    studentTest?: JsonNullableFilter<"StudentScore">
    isCompleted?: BoolFilter<"StudentScore"> | boolean
    createdAt?: DateTimeFilter<"StudentScore"> | Date | string
    updatedAt?: DateTimeFilter<"StudentScore"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
  }

  export type StudentScoreOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    testId?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    testName?: SortOrder
    studentTest?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    test?: TestOrderByWithRelationInput
  }

  export type StudentScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentScoreWhereInput | StudentScoreWhereInput[]
    OR?: StudentScoreWhereInput[]
    NOT?: StudentScoreWhereInput | StudentScoreWhereInput[]
    studentId?: StringFilter<"StudentScore"> | string
    testId?: StringFilter<"StudentScore"> | string
    score?: IntFilter<"StudentScore"> | number
    maxScore?: IntFilter<"StudentScore"> | number
    testName?: StringFilter<"StudentScore"> | string
    studentTest?: JsonNullableFilter<"StudentScore">
    isCompleted?: BoolFilter<"StudentScore"> | boolean
    createdAt?: DateTimeFilter<"StudentScore"> | Date | string
    updatedAt?: DateTimeFilter<"StudentScore"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
  }, "id">

  export type StudentScoreOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    testId?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    testName?: SortOrder
    studentTest?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentScoreCountOrderByAggregateInput
    _avg?: StudentScoreAvgOrderByAggregateInput
    _max?: StudentScoreMaxOrderByAggregateInput
    _min?: StudentScoreMinOrderByAggregateInput
    _sum?: StudentScoreSumOrderByAggregateInput
  }

  export type StudentScoreScalarWhereWithAggregatesInput = {
    AND?: StudentScoreScalarWhereWithAggregatesInput | StudentScoreScalarWhereWithAggregatesInput[]
    OR?: StudentScoreScalarWhereWithAggregatesInput[]
    NOT?: StudentScoreScalarWhereWithAggregatesInput | StudentScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentScore"> | string
    studentId?: StringWithAggregatesFilter<"StudentScore"> | string
    testId?: StringWithAggregatesFilter<"StudentScore"> | string
    score?: IntWithAggregatesFilter<"StudentScore"> | number
    maxScore?: IntWithAggregatesFilter<"StudentScore"> | number
    testName?: StringWithAggregatesFilter<"StudentScore"> | string
    studentTest?: JsonNullableWithAggregatesFilter<"StudentScore">
    isCompleted?: BoolWithAggregatesFilter<"StudentScore"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StudentScore"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentScore"> | Date | string
  }

  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    id?: StringFilter<"Test"> | string
    title?: StringNullableFilter<"Test"> | string | null
    timeLimit?: IntNullableFilter<"Test"> | number | null
    description?: StringNullableFilter<"Test"> | string | null
    score?: StringNullableFilter<"Test"> | string | null
    startTime?: DateTimeNullableFilter<"Test"> | Date | string | null
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
    testTYpe?: StringNullableFilter<"Test"> | string | null
    testTheme?: StringNullableFilter<"Test"> | string | null
    teacherId?: StringNullableFilter<"Test"> | string | null
    adminID?: StringNullableFilter<"Test"> | string | null
    status?: EnumTestStatusFilter<"Test"> | $Enums.TestStatus
    subTopicId?: StringNullableFilter<"Test"> | string | null
    groupId?: StringNullableFilter<"Test"> | string | null
    folderId?: StringNullableFilter<"Test"> | string | null
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    tasks?: TaskListRelationFilter
    studentScores?: StudentScoreListRelationFilter
    assignedTo?: AssignedTestListRelationFilter
    subTopic?: XOR<SubTopicNullableScalarRelationFilter, SubTopicWhereInput> | null
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    folder?: XOR<FolderNullableScalarRelationFilter, FolderWhereInput> | null
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    timeLimit?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testTYpe?: SortOrderInput | SortOrder
    testTheme?: SortOrderInput | SortOrder
    teacherId?: SortOrderInput | SortOrder
    adminID?: SortOrderInput | SortOrder
    status?: SortOrder
    subTopicId?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    folderId?: SortOrderInput | SortOrder
    teacher?: TeacherOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
    studentScores?: StudentScoreOrderByRelationAggregateInput
    assignedTo?: AssignedTestOrderByRelationAggregateInput
    subTopic?: SubTopicOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
    folder?: FolderOrderByWithRelationInput
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    title?: StringNullableFilter<"Test"> | string | null
    timeLimit?: IntNullableFilter<"Test"> | number | null
    description?: StringNullableFilter<"Test"> | string | null
    score?: StringNullableFilter<"Test"> | string | null
    startTime?: DateTimeNullableFilter<"Test"> | Date | string | null
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
    testTYpe?: StringNullableFilter<"Test"> | string | null
    testTheme?: StringNullableFilter<"Test"> | string | null
    teacherId?: StringNullableFilter<"Test"> | string | null
    adminID?: StringNullableFilter<"Test"> | string | null
    status?: EnumTestStatusFilter<"Test"> | $Enums.TestStatus
    subTopicId?: StringNullableFilter<"Test"> | string | null
    groupId?: StringNullableFilter<"Test"> | string | null
    folderId?: StringNullableFilter<"Test"> | string | null
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    tasks?: TaskListRelationFilter
    studentScores?: StudentScoreListRelationFilter
    assignedTo?: AssignedTestListRelationFilter
    subTopic?: XOR<SubTopicNullableScalarRelationFilter, SubTopicWhereInput> | null
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    folder?: XOR<FolderNullableScalarRelationFilter, FolderWhereInput> | null
  }, "id">

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    timeLimit?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testTYpe?: SortOrderInput | SortOrder
    testTheme?: SortOrderInput | SortOrder
    teacherId?: SortOrderInput | SortOrder
    adminID?: SortOrderInput | SortOrder
    status?: SortOrder
    subTopicId?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    folderId?: SortOrderInput | SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Test"> | string
    title?: StringNullableWithAggregatesFilter<"Test"> | string | null
    timeLimit?: IntNullableWithAggregatesFilter<"Test"> | number | null
    description?: StringNullableWithAggregatesFilter<"Test"> | string | null
    score?: StringNullableWithAggregatesFilter<"Test"> | string | null
    startTime?: DateTimeNullableWithAggregatesFilter<"Test"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
    testTYpe?: StringNullableWithAggregatesFilter<"Test"> | string | null
    testTheme?: StringNullableWithAggregatesFilter<"Test"> | string | null
    teacherId?: StringNullableWithAggregatesFilter<"Test"> | string | null
    adminID?: StringNullableWithAggregatesFilter<"Test"> | string | null
    status?: EnumTestStatusWithAggregatesFilter<"Test"> | $Enums.TestStatus
    subTopicId?: StringNullableWithAggregatesFilter<"Test"> | string | null
    groupId?: StringNullableWithAggregatesFilter<"Test"> | string | null
    folderId?: StringNullableWithAggregatesFilter<"Test"> | string | null
  }

  export type AssignedTestWhereInput = {
    AND?: AssignedTestWhereInput | AssignedTestWhereInput[]
    OR?: AssignedTestWhereInput[]
    NOT?: AssignedTestWhereInput | AssignedTestWhereInput[]
    id?: StringFilter<"AssignedTest"> | string
    studentId?: StringNullableFilter<"AssignedTest"> | string | null
    groupId?: StringNullableFilter<"AssignedTest"> | string | null
    testId?: StringFilter<"AssignedTest"> | string
    assignedAt?: DateTimeFilter<"AssignedTest"> | Date | string
    endTime?: DateTimeNullableFilter<"AssignedTest"> | Date | string | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
  }

  export type AssignedTestOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    testId?: SortOrder
    assignedAt?: SortOrder
    endTime?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
    test?: TestOrderByWithRelationInput
  }

  export type AssignedTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssignedTestWhereInput | AssignedTestWhereInput[]
    OR?: AssignedTestWhereInput[]
    NOT?: AssignedTestWhereInput | AssignedTestWhereInput[]
    studentId?: StringNullableFilter<"AssignedTest"> | string | null
    groupId?: StringNullableFilter<"AssignedTest"> | string | null
    testId?: StringFilter<"AssignedTest"> | string
    assignedAt?: DateTimeFilter<"AssignedTest"> | Date | string
    endTime?: DateTimeNullableFilter<"AssignedTest"> | Date | string | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
  }, "id">

  export type AssignedTestOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    testId?: SortOrder
    assignedAt?: SortOrder
    endTime?: SortOrderInput | SortOrder
    _count?: AssignedTestCountOrderByAggregateInput
    _max?: AssignedTestMaxOrderByAggregateInput
    _min?: AssignedTestMinOrderByAggregateInput
  }

  export type AssignedTestScalarWhereWithAggregatesInput = {
    AND?: AssignedTestScalarWhereWithAggregatesInput | AssignedTestScalarWhereWithAggregatesInput[]
    OR?: AssignedTestScalarWhereWithAggregatesInput[]
    NOT?: AssignedTestScalarWhereWithAggregatesInput | AssignedTestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssignedTest"> | string
    studentId?: StringNullableWithAggregatesFilter<"AssignedTest"> | string | null
    groupId?: StringNullableWithAggregatesFilter<"AssignedTest"> | string | null
    testId?: StringWithAggregatesFilter<"AssignedTest"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"AssignedTest"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"AssignedTest"> | Date | string | null
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    number?: StringFilter<"Task"> | string
    image?: StringNullableFilter<"Task"> | string | null
    type?: StringNullableFilter<"Task"> | string | null
    isSaved?: BoolNullableFilter<"Task"> | boolean | null
    userAnsewer?: JsonNullableFilter<"Task">
    pairs?: JsonNullableFilter<"Task">
    answers?: JsonNullableFilter<"Task">
    testId?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    test?: XOR<TestNullableScalarRelationFilter, TestWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    number?: SortOrder
    image?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    isSaved?: SortOrderInput | SortOrder
    userAnsewer?: SortOrderInput | SortOrder
    pairs?: SortOrderInput | SortOrder
    answers?: SortOrderInput | SortOrder
    testId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    test?: TestOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    number?: StringFilter<"Task"> | string
    image?: StringNullableFilter<"Task"> | string | null
    type?: StringNullableFilter<"Task"> | string | null
    isSaved?: BoolNullableFilter<"Task"> | boolean | null
    userAnsewer?: JsonNullableFilter<"Task">
    pairs?: JsonNullableFilter<"Task">
    answers?: JsonNullableFilter<"Task">
    testId?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    test?: XOR<TestNullableScalarRelationFilter, TestWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    number?: SortOrder
    image?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    isSaved?: SortOrderInput | SortOrder
    userAnsewer?: SortOrderInput | SortOrder
    pairs?: SortOrderInput | SortOrder
    answers?: SortOrderInput | SortOrder
    testId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    number?: StringWithAggregatesFilter<"Task"> | string
    image?: StringNullableWithAggregatesFilter<"Task"> | string | null
    type?: StringNullableWithAggregatesFilter<"Task"> | string | null
    isSaved?: BoolNullableWithAggregatesFilter<"Task"> | boolean | null
    userAnsewer?: JsonNullableWithAggregatesFilter<"Task">
    pairs?: JsonNullableWithAggregatesFilter<"Task">
    answers?: JsonNullableWithAggregatesFilter<"Task">
    testId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    title?: StringFilter<"Schedule"> | string
    dayOfWeek?: IntFilter<"Schedule"> | number
    hours?: IntFilter<"Schedule"> | number
    minutes?: IntFilter<"Schedule"> | number
    duration?: IntFilter<"Schedule"> | number
    weeks?: IntNullableFilter<"Schedule"> | number | null
    teacherId?: StringFilter<"Schedule"> | string
    exceptions?: JsonNullableFilter<"Schedule">
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    dayOfWeek?: SortOrder
    hours?: SortOrder
    minutes?: SortOrder
    duration?: SortOrder
    weeks?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    exceptions?: SortOrderInput | SortOrder
    teacher?: TeacherOrderByWithRelationInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    title?: StringFilter<"Schedule"> | string
    dayOfWeek?: IntFilter<"Schedule"> | number
    hours?: IntFilter<"Schedule"> | number
    minutes?: IntFilter<"Schedule"> | number
    duration?: IntFilter<"Schedule"> | number
    weeks?: IntNullableFilter<"Schedule"> | number | null
    teacherId?: StringFilter<"Schedule"> | string
    exceptions?: JsonNullableFilter<"Schedule">
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    dayOfWeek?: SortOrder
    hours?: SortOrder
    minutes?: SortOrder
    duration?: SortOrder
    weeks?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    exceptions?: SortOrderInput | SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    title?: StringWithAggregatesFilter<"Schedule"> | string
    dayOfWeek?: IntWithAggregatesFilter<"Schedule"> | number
    hours?: IntWithAggregatesFilter<"Schedule"> | number
    minutes?: IntWithAggregatesFilter<"Schedule"> | number
    duration?: IntWithAggregatesFilter<"Schedule"> | number
    weeks?: IntNullableWithAggregatesFilter<"Schedule"> | number | null
    teacherId?: StringWithAggregatesFilter<"Schedule"> | string
    exceptions?: JsonNullableWithAggregatesFilter<"Schedule">
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    title?: StringFilter<"Group"> | string
    teacherId?: StringFilter<"Group"> | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    students?: StudentListRelationFilter
    tests?: TestListRelationFilter
    assignedTests?: AssignedTestListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    teacherId?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
    tests?: TestOrderByRelationAggregateInput
    assignedTests?: AssignedTestOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    title?: StringFilter<"Group"> | string
    teacherId?: StringFilter<"Group"> | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    students?: StudentListRelationFilter
    tests?: TestListRelationFilter
    assignedTests?: AssignedTestListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    teacherId?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    title?: StringWithAggregatesFilter<"Group"> | string
    teacherId?: StringWithAggregatesFilter<"Group"> | string
  }

  export type EmailVerificationCodeWhereInput = {
    AND?: EmailVerificationCodeWhereInput | EmailVerificationCodeWhereInput[]
    OR?: EmailVerificationCodeWhereInput[]
    NOT?: EmailVerificationCodeWhereInput | EmailVerificationCodeWhereInput[]
    id?: StringFilter<"EmailVerificationCode"> | string
    email?: StringFilter<"EmailVerificationCode"> | string
    code?: StringFilter<"EmailVerificationCode"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationCode"> | Date | string
  }

  export type EmailVerificationCodeOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type EmailVerificationCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    code?: string
    AND?: EmailVerificationCodeWhereInput | EmailVerificationCodeWhereInput[]
    OR?: EmailVerificationCodeWhereInput[]
    NOT?: EmailVerificationCodeWhereInput | EmailVerificationCodeWhereInput[]
    expiresAt?: DateTimeFilter<"EmailVerificationCode"> | Date | string
  }, "id" | "email" | "code">

  export type EmailVerificationCodeOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    _count?: EmailVerificationCodeCountOrderByAggregateInput
    _max?: EmailVerificationCodeMaxOrderByAggregateInput
    _min?: EmailVerificationCodeMinOrderByAggregateInput
  }

  export type EmailVerificationCodeScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationCodeScalarWhereWithAggregatesInput | EmailVerificationCodeScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationCodeScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationCodeScalarWhereWithAggregatesInput | EmailVerificationCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailVerificationCode"> | string
    email?: StringWithAggregatesFilter<"EmailVerificationCode"> | string
    code?: StringWithAggregatesFilter<"EmailVerificationCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"EmailVerificationCode"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: TopicCreateNestedManyWithoutAdminInput
    tests?: TestCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: TopicUncheckedCreateNestedManyWithoutAdminInput
    tests?: TestUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUpdateManyWithoutAdminNestedInput
    tests?: TestUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUncheckedUpdateManyWithoutAdminNestedInput
    tests?: TestUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicCreateInput = {
    id?: string
    subjectType: string
    name: string
    number: string
    createdAt?: Date | string
    admin: AdminCreateNestedOneWithoutTopicsInput
    subTopics?: SubTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateInput = {
    id?: string
    subjectType: string
    name: string
    number: string
    adminId: string
    createdAt?: Date | string
    subTopics?: SubTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutTopicsNestedInput
    subTopics?: SubTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTopics?: SubTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateManyInput = {
    id?: string
    subjectType: string
    name: string
    number: string
    adminId: string
    createdAt?: Date | string
  }

  export type TopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubTopicCreateInput = {
    id?: string
    name: string
    number: string
    topic: TopicCreateNestedOneWithoutSubTopicsInput
    tests?: TestCreateNestedManyWithoutSubTopicInput
  }

  export type SubTopicUncheckedCreateInput = {
    id?: string
    name: string
    number: string
    topicId: string
    tests?: TestUncheckedCreateNestedManyWithoutSubTopicInput
  }

  export type SubTopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    topic?: TopicUpdateOneRequiredWithoutSubTopicsNestedInput
    tests?: TestUpdateManyWithoutSubTopicNestedInput
  }

  export type SubTopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    tests?: TestUncheckedUpdateManyWithoutSubTopicNestedInput
  }

  export type SubTopicCreateManyInput = {
    id?: string
    name: string
    number: string
    topicId: string
  }

  export type SubTopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
  }

  export type SubTopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherCreateInput = {
    id?: string
    name: string
    email: string
    isEmailVerified?: boolean
    phone: string
    password: string
    subject: $Enums.Subject
    plan?: string | null
    subscriptionTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    tests?: TestCreateNestedManyWithoutTeacherInput
    students?: StudentCreateNestedManyWithoutTeacherInput
    schedule?: ScheduleCreateNestedManyWithoutTeacherInput
    groups?: GroupCreateNestedManyWithoutTeacherInput
    folders?: FolderCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    isEmailVerified?: boolean
    phone: string
    password: string
    subject: $Enums.Subject
    plan?: string | null
    subscriptionTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    tests?: TestUncheckedCreateNestedManyWithoutTeacherInput
    students?: StudentUncheckedCreateNestedManyWithoutTeacherInput
    schedule?: ScheduleUncheckedCreateNestedManyWithoutTeacherInput
    groups?: GroupUncheckedCreateNestedManyWithoutTeacherInput
    folders?: FolderUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    tests?: TestUpdateManyWithoutTeacherNestedInput
    students?: StudentUpdateManyWithoutTeacherNestedInput
    schedule?: ScheduleUpdateManyWithoutTeacherNestedInput
    groups?: GroupUpdateManyWithoutTeacherNestedInput
    folders?: FolderUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    tests?: TestUncheckedUpdateManyWithoutTeacherNestedInput
    students?: StudentUncheckedUpdateManyWithoutTeacherNestedInput
    schedule?: ScheduleUncheckedUpdateManyWithoutTeacherNestedInput
    groups?: GroupUncheckedUpdateManyWithoutTeacherNestedInput
    folders?: FolderUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: string
    name: string
    email: string
    isEmailVerified?: boolean
    phone: string
    password: string
    subject: $Enums.Subject
    plan?: string | null
    subscriptionTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
  }

  export type TeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type FolderCreateInput = {
    id?: string
    name: string
    tests?: TestCreateNestedManyWithoutFolderInput
    teacher?: TeacherCreateNestedOneWithoutFoldersInput
  }

  export type FolderUncheckedCreateInput = {
    id?: string
    name: string
    teacherId: string
    tests?: TestUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tests?: TestUpdateManyWithoutFolderNestedInput
    teacher?: TeacherUpdateOneWithoutFoldersNestedInput
  }

  export type FolderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    tests?: TestUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderCreateManyInput = {
    id?: string
    name: string
    teacherId: string
  }

  export type FolderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FolderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    viewAccess?: boolean
    subject?: $Enums.Subject | null
    lastActivity?: Date | string | null
    scores?: StudentScoreCreateNestedManyWithoutStudentInput
    assignedTests?: AssignedTestCreateNestedManyWithoutStudentInput
    teacher: TeacherCreateNestedOneWithoutStudentsInput
    group?: GroupCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    viewAccess?: boolean
    subject?: $Enums.Subject | null
    lastActivity?: Date | string | null
    teacherId: string
    groupId?: string | null
    scores?: StudentScoreUncheckedCreateNestedManyWithoutStudentInput
    assignedTests?: AssignedTestUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    viewAccess?: BoolFieldUpdateOperationsInput | boolean
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scores?: StudentScoreUpdateManyWithoutStudentNestedInput
    assignedTests?: AssignedTestUpdateManyWithoutStudentNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutStudentsNestedInput
    group?: GroupUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    viewAccess?: BoolFieldUpdateOperationsInput | boolean
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    scores?: StudentScoreUncheckedUpdateManyWithoutStudentNestedInput
    assignedTests?: AssignedTestUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    viewAccess?: boolean
    subject?: $Enums.Subject | null
    lastActivity?: Date | string | null
    teacherId: string
    groupId?: string | null
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    viewAccess?: BoolFieldUpdateOperationsInput | boolean
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    viewAccess?: BoolFieldUpdateOperationsInput | boolean
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentScoreCreateInput = {
    id?: string
    score: number
    maxScore: number
    testName?: string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutScoresInput
    test: TestCreateNestedOneWithoutStudentScoresInput
  }

  export type StudentScoreUncheckedCreateInput = {
    id?: string
    studentId: string
    testId: string
    score: number
    maxScore: number
    testName?: string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutScoresNestedInput
    test?: TestUpdateOneRequiredWithoutStudentScoresNestedInput
  }

  export type StudentScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentScoreCreateManyInput = {
    id?: string
    studentId: string
    testId: string
    score: number
    maxScore: number
    testName?: string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCreateInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    status?: $Enums.TestStatus
    teacher?: TeacherCreateNestedOneWithoutTestsInput
    admin?: AdminCreateNestedOneWithoutTestsInput
    tasks?: TaskCreateNestedManyWithoutTestInput
    studentScores?: StudentScoreCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestCreateNestedManyWithoutTestInput
    subTopic?: SubTopicCreateNestedOneWithoutTestsInput
    group?: GroupCreateNestedOneWithoutTestsInput
    folder?: FolderCreateNestedOneWithoutTestsInput
  }

  export type TestUncheckedCreateInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    teacherId?: string | null
    adminID?: string | null
    status?: $Enums.TestStatus
    subTopicId?: string | null
    groupId?: string | null
    folderId?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutTestInput
    studentScores?: StudentScoreUncheckedCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    teacher?: TeacherUpdateOneWithoutTestsNestedInput
    admin?: AdminUpdateOneWithoutTestsNestedInput
    tasks?: TaskUpdateManyWithoutTestNestedInput
    studentScores?: StudentScoreUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUpdateManyWithoutTestNestedInput
    subTopic?: SubTopicUpdateOneWithoutTestsNestedInput
    group?: GroupUpdateOneWithoutTestsNestedInput
    folder?: FolderUpdateOneWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    adminID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    subTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutTestNestedInput
    studentScores?: StudentScoreUncheckedUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestCreateManyInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    teacherId?: string | null
    adminID?: string | null
    status?: $Enums.TestStatus
    subTopicId?: string | null
    groupId?: string | null
    folderId?: string | null
  }

  export type TestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
  }

  export type TestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    adminID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    subTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignedTestCreateInput = {
    id?: string
    assignedAt?: Date | string
    endTime?: Date | string | null
    student?: StudentCreateNestedOneWithoutAssignedTestsInput
    group?: GroupCreateNestedOneWithoutAssignedTestsInput
    test: TestCreateNestedOneWithoutAssignedToInput
  }

  export type AssignedTestUncheckedCreateInput = {
    id?: string
    studentId?: string | null
    groupId?: string | null
    testId: string
    assignedAt?: Date | string
    endTime?: Date | string | null
  }

  export type AssignedTestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneWithoutAssignedTestsNestedInput
    group?: GroupUpdateOneWithoutAssignedTestsNestedInput
    test?: TestUpdateOneRequiredWithoutAssignedToNestedInput
  }

  export type AssignedTestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    testId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssignedTestCreateManyInput = {
    id?: string
    studentId?: string | null
    groupId?: string | null
    testId: string
    assignedAt?: Date | string
    endTime?: Date | string | null
  }

  export type AssignedTestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssignedTestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    testId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    number: string
    image?: string | null
    type?: string | null
    isSaved?: boolean | null
    userAnsewer?: NullableJsonNullValueInput | InputJsonValue
    pairs?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    test?: TestCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    number: string
    image?: string | null
    type?: string | null
    isSaved?: boolean | null
    userAnsewer?: NullableJsonNullValueInput | InputJsonValue
    pairs?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    testId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    isSaved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAnsewer?: NullableJsonNullValueInput | InputJsonValue
    pairs?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    isSaved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAnsewer?: NullableJsonNullValueInput | InputJsonValue
    pairs?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    number: string
    image?: string | null
    type?: string | null
    isSaved?: boolean | null
    userAnsewer?: NullableJsonNullValueInput | InputJsonValue
    pairs?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    testId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    isSaved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAnsewer?: NullableJsonNullValueInput | InputJsonValue
    pairs?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    isSaved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAnsewer?: NullableJsonNullValueInput | InputJsonValue
    pairs?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateInput = {
    id?: string
    title: string
    dayOfWeek: number
    hours: number
    minutes: number
    duration: number
    weeks?: number | null
    exceptions?: NullableJsonNullValueInput | InputJsonValue
    teacher: TeacherCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    title: string
    dayOfWeek: number
    hours: number
    minutes: number
    duration: number
    weeks?: number | null
    teacherId: string
    exceptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    minutes?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    weeks?: NullableIntFieldUpdateOperationsInput | number | null
    exceptions?: NullableJsonNullValueInput | InputJsonValue
    teacher?: TeacherUpdateOneRequiredWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    minutes?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    weeks?: NullableIntFieldUpdateOperationsInput | number | null
    teacherId?: StringFieldUpdateOperationsInput | string
    exceptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ScheduleCreateManyInput = {
    id?: string
    title: string
    dayOfWeek: number
    hours: number
    minutes: number
    duration: number
    weeks?: number | null
    teacherId: string
    exceptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    minutes?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    weeks?: NullableIntFieldUpdateOperationsInput | number | null
    exceptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    minutes?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    weeks?: NullableIntFieldUpdateOperationsInput | number | null
    teacherId?: StringFieldUpdateOperationsInput | string
    exceptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GroupCreateInput = {
    id?: string
    title: string
    teacher: TeacherCreateNestedOneWithoutGroupsInput
    students?: StudentCreateNestedManyWithoutGroupInput
    tests?: TestCreateNestedManyWithoutGroupInput
    assignedTests?: AssignedTestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    title: string
    teacherId: string
    students?: StudentUncheckedCreateNestedManyWithoutGroupInput
    tests?: TestUncheckedCreateNestedManyWithoutGroupInput
    assignedTests?: AssignedTestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneRequiredWithoutGroupsNestedInput
    students?: StudentUpdateManyWithoutGroupNestedInput
    tests?: TestUpdateManyWithoutGroupNestedInput
    assignedTests?: AssignedTestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    students?: StudentUncheckedUpdateManyWithoutGroupNestedInput
    tests?: TestUncheckedUpdateManyWithoutGroupNestedInput
    assignedTests?: AssignedTestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    title: string
    teacherId: string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailVerificationCodeCreateInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
  }

  export type EmailVerificationCodeUncheckedCreateInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
  }

  export type EmailVerificationCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationCodeCreateManyInput = {
    id?: string
    email: string
    code: string
    expiresAt: Date | string
  }

  export type EmailVerificationCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TopicListRelationFilter = {
    every?: TopicWhereInput
    some?: TopicWhereInput
    none?: TopicWhereInput
  }

  export type TestListRelationFilter = {
    every?: TestWhereInput
    some?: TestWhereInput
    none?: TestWhereInput
  }

  export type TopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type SubTopicListRelationFilter = {
    every?: SubTopicWhereInput
    some?: SubTopicWhereInput
    none?: SubTopicWhereInput
  }

  export type SubTopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    subjectType?: SortOrder
    name?: SortOrder
    number?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    subjectType?: SortOrder
    name?: SortOrder
    number?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    subjectType?: SortOrder
    name?: SortOrder
    number?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
  }

  export type TopicScalarRelationFilter = {
    is?: TopicWhereInput
    isNot?: TopicWhereInput
  }

  export type SubTopicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    topicId?: SortOrder
  }

  export type SubTopicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    topicId?: SortOrder
  }

  export type SubTopicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    topicId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumSubjectFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel>
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectFilter<$PrismaModel> | $Enums.Subject
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type FolderListRelationFilter = {
    every?: FolderWhereInput
    some?: FolderWhereInput
    none?: FolderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FolderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isEmailVerified?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    subject?: SortOrder
    plan?: SortOrder
    subscriptionTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isEmailVerified?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    subject?: SortOrder
    plan?: SortOrder
    subscriptionTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isEmailVerified?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    subject?: SortOrder
    plan?: SortOrder
    subscriptionTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSubjectWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel>
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectWithAggregatesFilter<$PrismaModel> | $Enums.Subject
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubjectFilter<$PrismaModel>
    _max?: NestedEnumSubjectFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type FolderFolder_name_teacher_uniqueCompoundUniqueInput = {
    name: string
    teacherId: string
  }

  export type FolderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
  }

  export type FolderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
  }

  export type FolderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
  }

  export type EnumSubjectNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubjectNullableFilter<$PrismaModel> | $Enums.Subject | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StudentScoreListRelationFilter = {
    every?: StudentScoreWhereInput
    some?: StudentScoreWhereInput
    none?: StudentScoreWhereInput
  }

  export type AssignedTestListRelationFilter = {
    every?: AssignedTestWhereInput
    some?: AssignedTestWhereInput
    none?: AssignedTestWhereInput
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type StudentScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignedTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    viewAccess?: SortOrder
    subject?: SortOrder
    lastActivity?: SortOrder
    teacherId?: SortOrder
    groupId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    viewAccess?: SortOrder
    subject?: SortOrder
    lastActivity?: SortOrder
    teacherId?: SortOrder
    groupId?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    viewAccess?: SortOrder
    subject?: SortOrder
    lastActivity?: SortOrder
    teacherId?: SortOrder
    groupId?: SortOrder
  }

  export type EnumSubjectNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubjectNullableWithAggregatesFilter<$PrismaModel> | $Enums.Subject | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSubjectNullableFilter<$PrismaModel>
    _max?: NestedEnumSubjectNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type TestScalarRelationFilter = {
    is?: TestWhereInput
    isNot?: TestWhereInput
  }

  export type StudentScoreCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    testId?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    testName?: SortOrder
    studentTest?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentScoreAvgOrderByAggregateInput = {
    score?: SortOrder
    maxScore?: SortOrder
  }

  export type StudentScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    testId?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    testName?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentScoreMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    testId?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    testName?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentScoreSumOrderByAggregateInput = {
    score?: SortOrder
    maxScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumTestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TestStatus | EnumTestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TestStatus[] | ListEnumTestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestStatus[] | ListEnumTestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTestStatusFilter<$PrismaModel> | $Enums.TestStatus
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type SubTopicNullableScalarRelationFilter = {
    is?: SubTopicWhereInput | null
    isNot?: SubTopicWhereInput | null
  }

  export type FolderNullableScalarRelationFilter = {
    is?: FolderWhereInput | null
    isNot?: FolderWhereInput | null
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timeLimit?: SortOrder
    description?: SortOrder
    score?: SortOrder
    startTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testTYpe?: SortOrder
    testTheme?: SortOrder
    teacherId?: SortOrder
    adminID?: SortOrder
    status?: SortOrder
    subTopicId?: SortOrder
    groupId?: SortOrder
    folderId?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    timeLimit?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timeLimit?: SortOrder
    description?: SortOrder
    score?: SortOrder
    startTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testTYpe?: SortOrder
    testTheme?: SortOrder
    teacherId?: SortOrder
    adminID?: SortOrder
    status?: SortOrder
    subTopicId?: SortOrder
    groupId?: SortOrder
    folderId?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timeLimit?: SortOrder
    description?: SortOrder
    score?: SortOrder
    startTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testTYpe?: SortOrder
    testTheme?: SortOrder
    teacherId?: SortOrder
    adminID?: SortOrder
    status?: SortOrder
    subTopicId?: SortOrder
    groupId?: SortOrder
    folderId?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    timeLimit?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumTestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestStatus | EnumTestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TestStatus[] | ListEnumTestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestStatus[] | ListEnumTestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTestStatusWithAggregatesFilter<$PrismaModel> | $Enums.TestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTestStatusFilter<$PrismaModel>
    _max?: NestedEnumTestStatusFilter<$PrismaModel>
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type AssignedTestCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    testId?: SortOrder
    assignedAt?: SortOrder
    endTime?: SortOrder
  }

  export type AssignedTestMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    testId?: SortOrder
    assignedAt?: SortOrder
    endTime?: SortOrder
  }

  export type AssignedTestMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    testId?: SortOrder
    assignedAt?: SortOrder
    endTime?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type TestNullableScalarRelationFilter = {
    is?: TestWhereInput | null
    isNot?: TestWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    number?: SortOrder
    image?: SortOrder
    type?: SortOrder
    isSaved?: SortOrder
    userAnsewer?: SortOrder
    pairs?: SortOrder
    answers?: SortOrder
    testId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    number?: SortOrder
    image?: SortOrder
    type?: SortOrder
    isSaved?: SortOrder
    testId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    number?: SortOrder
    image?: SortOrder
    type?: SortOrder
    isSaved?: SortOrder
    testId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    dayOfWeek?: SortOrder
    hours?: SortOrder
    minutes?: SortOrder
    duration?: SortOrder
    weeks?: SortOrder
    teacherId?: SortOrder
    exceptions?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
    hours?: SortOrder
    minutes?: SortOrder
    duration?: SortOrder
    weeks?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    dayOfWeek?: SortOrder
    hours?: SortOrder
    minutes?: SortOrder
    duration?: SortOrder
    weeks?: SortOrder
    teacherId?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    dayOfWeek?: SortOrder
    hours?: SortOrder
    minutes?: SortOrder
    duration?: SortOrder
    weeks?: SortOrder
    teacherId?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
    hours?: SortOrder
    minutes?: SortOrder
    duration?: SortOrder
    weeks?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    teacherId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    teacherId?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    teacherId?: SortOrder
  }

  export type EmailVerificationCodeCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type EmailVerificationCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type EmailVerificationCodeMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
  }

  export type TopicCreateNestedManyWithoutAdminInput = {
    create?: XOR<TopicCreateWithoutAdminInput, TopicUncheckedCreateWithoutAdminInput> | TopicCreateWithoutAdminInput[] | TopicUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutAdminInput | TopicCreateOrConnectWithoutAdminInput[]
    createMany?: TopicCreateManyAdminInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type TestCreateNestedManyWithoutAdminInput = {
    create?: XOR<TestCreateWithoutAdminInput, TestUncheckedCreateWithoutAdminInput> | TestCreateWithoutAdminInput[] | TestUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TestCreateOrConnectWithoutAdminInput | TestCreateOrConnectWithoutAdminInput[]
    createMany?: TestCreateManyAdminInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type TopicUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<TopicCreateWithoutAdminInput, TopicUncheckedCreateWithoutAdminInput> | TopicCreateWithoutAdminInput[] | TopicUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutAdminInput | TopicCreateOrConnectWithoutAdminInput[]
    createMany?: TopicCreateManyAdminInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type TestUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<TestCreateWithoutAdminInput, TestUncheckedCreateWithoutAdminInput> | TestCreateWithoutAdminInput[] | TestUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TestCreateOrConnectWithoutAdminInput | TestCreateOrConnectWithoutAdminInput[]
    createMany?: TestCreateManyAdminInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TopicUpdateManyWithoutAdminNestedInput = {
    create?: XOR<TopicCreateWithoutAdminInput, TopicUncheckedCreateWithoutAdminInput> | TopicCreateWithoutAdminInput[] | TopicUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutAdminInput | TopicCreateOrConnectWithoutAdminInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutAdminInput | TopicUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: TopicCreateManyAdminInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutAdminInput | TopicUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutAdminInput | TopicUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type TestUpdateManyWithoutAdminNestedInput = {
    create?: XOR<TestCreateWithoutAdminInput, TestUncheckedCreateWithoutAdminInput> | TestCreateWithoutAdminInput[] | TestUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TestCreateOrConnectWithoutAdminInput | TestCreateOrConnectWithoutAdminInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutAdminInput | TestUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: TestCreateManyAdminInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutAdminInput | TestUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: TestUpdateManyWithWhereWithoutAdminInput | TestUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type TopicUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<TopicCreateWithoutAdminInput, TopicUncheckedCreateWithoutAdminInput> | TopicCreateWithoutAdminInput[] | TopicUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutAdminInput | TopicCreateOrConnectWithoutAdminInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutAdminInput | TopicUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: TopicCreateManyAdminInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutAdminInput | TopicUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutAdminInput | TopicUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type TestUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<TestCreateWithoutAdminInput, TestUncheckedCreateWithoutAdminInput> | TestCreateWithoutAdminInput[] | TestUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TestCreateOrConnectWithoutAdminInput | TestCreateOrConnectWithoutAdminInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutAdminInput | TestUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: TestCreateManyAdminInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutAdminInput | TestUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: TestUpdateManyWithWhereWithoutAdminInput | TestUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutTopicsInput = {
    create?: XOR<AdminCreateWithoutTopicsInput, AdminUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutTopicsInput
    connect?: AdminWhereUniqueInput
  }

  export type SubTopicCreateNestedManyWithoutTopicInput = {
    create?: XOR<SubTopicCreateWithoutTopicInput, SubTopicUncheckedCreateWithoutTopicInput> | SubTopicCreateWithoutTopicInput[] | SubTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SubTopicCreateOrConnectWithoutTopicInput | SubTopicCreateOrConnectWithoutTopicInput[]
    createMany?: SubTopicCreateManyTopicInputEnvelope
    connect?: SubTopicWhereUniqueInput | SubTopicWhereUniqueInput[]
  }

  export type SubTopicUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<SubTopicCreateWithoutTopicInput, SubTopicUncheckedCreateWithoutTopicInput> | SubTopicCreateWithoutTopicInput[] | SubTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SubTopicCreateOrConnectWithoutTopicInput | SubTopicCreateOrConnectWithoutTopicInput[]
    createMany?: SubTopicCreateManyTopicInputEnvelope
    connect?: SubTopicWhereUniqueInput | SubTopicWhereUniqueInput[]
  }

  export type AdminUpdateOneRequiredWithoutTopicsNestedInput = {
    create?: XOR<AdminCreateWithoutTopicsInput, AdminUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutTopicsInput
    upsert?: AdminUpsertWithoutTopicsInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutTopicsInput, AdminUpdateWithoutTopicsInput>, AdminUncheckedUpdateWithoutTopicsInput>
  }

  export type SubTopicUpdateManyWithoutTopicNestedInput = {
    create?: XOR<SubTopicCreateWithoutTopicInput, SubTopicUncheckedCreateWithoutTopicInput> | SubTopicCreateWithoutTopicInput[] | SubTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SubTopicCreateOrConnectWithoutTopicInput | SubTopicCreateOrConnectWithoutTopicInput[]
    upsert?: SubTopicUpsertWithWhereUniqueWithoutTopicInput | SubTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: SubTopicCreateManyTopicInputEnvelope
    set?: SubTopicWhereUniqueInput | SubTopicWhereUniqueInput[]
    disconnect?: SubTopicWhereUniqueInput | SubTopicWhereUniqueInput[]
    delete?: SubTopicWhereUniqueInput | SubTopicWhereUniqueInput[]
    connect?: SubTopicWhereUniqueInput | SubTopicWhereUniqueInput[]
    update?: SubTopicUpdateWithWhereUniqueWithoutTopicInput | SubTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: SubTopicUpdateManyWithWhereWithoutTopicInput | SubTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: SubTopicScalarWhereInput | SubTopicScalarWhereInput[]
  }

  export type SubTopicUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<SubTopicCreateWithoutTopicInput, SubTopicUncheckedCreateWithoutTopicInput> | SubTopicCreateWithoutTopicInput[] | SubTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SubTopicCreateOrConnectWithoutTopicInput | SubTopicCreateOrConnectWithoutTopicInput[]
    upsert?: SubTopicUpsertWithWhereUniqueWithoutTopicInput | SubTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: SubTopicCreateManyTopicInputEnvelope
    set?: SubTopicWhereUniqueInput | SubTopicWhereUniqueInput[]
    disconnect?: SubTopicWhereUniqueInput | SubTopicWhereUniqueInput[]
    delete?: SubTopicWhereUniqueInput | SubTopicWhereUniqueInput[]
    connect?: SubTopicWhereUniqueInput | SubTopicWhereUniqueInput[]
    update?: SubTopicUpdateWithWhereUniqueWithoutTopicInput | SubTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: SubTopicUpdateManyWithWhereWithoutTopicInput | SubTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: SubTopicScalarWhereInput | SubTopicScalarWhereInput[]
  }

  export type TopicCreateNestedOneWithoutSubTopicsInput = {
    create?: XOR<TopicCreateWithoutSubTopicsInput, TopicUncheckedCreateWithoutSubTopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutSubTopicsInput
    connect?: TopicWhereUniqueInput
  }

  export type TestCreateNestedManyWithoutSubTopicInput = {
    create?: XOR<TestCreateWithoutSubTopicInput, TestUncheckedCreateWithoutSubTopicInput> | TestCreateWithoutSubTopicInput[] | TestUncheckedCreateWithoutSubTopicInput[]
    connectOrCreate?: TestCreateOrConnectWithoutSubTopicInput | TestCreateOrConnectWithoutSubTopicInput[]
    createMany?: TestCreateManySubTopicInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type TestUncheckedCreateNestedManyWithoutSubTopicInput = {
    create?: XOR<TestCreateWithoutSubTopicInput, TestUncheckedCreateWithoutSubTopicInput> | TestCreateWithoutSubTopicInput[] | TestUncheckedCreateWithoutSubTopicInput[]
    connectOrCreate?: TestCreateOrConnectWithoutSubTopicInput | TestCreateOrConnectWithoutSubTopicInput[]
    createMany?: TestCreateManySubTopicInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type TopicUpdateOneRequiredWithoutSubTopicsNestedInput = {
    create?: XOR<TopicCreateWithoutSubTopicsInput, TopicUncheckedCreateWithoutSubTopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutSubTopicsInput
    upsert?: TopicUpsertWithoutSubTopicsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutSubTopicsInput, TopicUpdateWithoutSubTopicsInput>, TopicUncheckedUpdateWithoutSubTopicsInput>
  }

  export type TestUpdateManyWithoutSubTopicNestedInput = {
    create?: XOR<TestCreateWithoutSubTopicInput, TestUncheckedCreateWithoutSubTopicInput> | TestCreateWithoutSubTopicInput[] | TestUncheckedCreateWithoutSubTopicInput[]
    connectOrCreate?: TestCreateOrConnectWithoutSubTopicInput | TestCreateOrConnectWithoutSubTopicInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutSubTopicInput | TestUpsertWithWhereUniqueWithoutSubTopicInput[]
    createMany?: TestCreateManySubTopicInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutSubTopicInput | TestUpdateWithWhereUniqueWithoutSubTopicInput[]
    updateMany?: TestUpdateManyWithWhereWithoutSubTopicInput | TestUpdateManyWithWhereWithoutSubTopicInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type TestUncheckedUpdateManyWithoutSubTopicNestedInput = {
    create?: XOR<TestCreateWithoutSubTopicInput, TestUncheckedCreateWithoutSubTopicInput> | TestCreateWithoutSubTopicInput[] | TestUncheckedCreateWithoutSubTopicInput[]
    connectOrCreate?: TestCreateOrConnectWithoutSubTopicInput | TestCreateOrConnectWithoutSubTopicInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutSubTopicInput | TestUpsertWithWhereUniqueWithoutSubTopicInput[]
    createMany?: TestCreateManySubTopicInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutSubTopicInput | TestUpdateWithWhereUniqueWithoutSubTopicInput[]
    updateMany?: TestUpdateManyWithWhereWithoutSubTopicInput | TestUpdateManyWithWhereWithoutSubTopicInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type TestCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TestCreateWithoutTeacherInput, TestUncheckedCreateWithoutTeacherInput> | TestCreateWithoutTeacherInput[] | TestUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TestCreateOrConnectWithoutTeacherInput | TestCreateOrConnectWithoutTeacherInput[]
    createMany?: TestCreateManyTeacherInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutTeacherInput = {
    create?: XOR<StudentCreateWithoutTeacherInput, StudentUncheckedCreateWithoutTeacherInput> | StudentCreateWithoutTeacherInput[] | StudentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutTeacherInput | StudentCreateOrConnectWithoutTeacherInput[]
    createMany?: StudentCreateManyTeacherInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ScheduleCreateWithoutTeacherInput, ScheduleUncheckedCreateWithoutTeacherInput> | ScheduleCreateWithoutTeacherInput[] | ScheduleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutTeacherInput | ScheduleCreateOrConnectWithoutTeacherInput[]
    createMany?: ScheduleCreateManyTeacherInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutTeacherInput = {
    create?: XOR<GroupCreateWithoutTeacherInput, GroupUncheckedCreateWithoutTeacherInput> | GroupCreateWithoutTeacherInput[] | GroupUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutTeacherInput | GroupCreateOrConnectWithoutTeacherInput[]
    createMany?: GroupCreateManyTeacherInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type FolderCreateNestedManyWithoutTeacherInput = {
    create?: XOR<FolderCreateWithoutTeacherInput, FolderUncheckedCreateWithoutTeacherInput> | FolderCreateWithoutTeacherInput[] | FolderUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutTeacherInput | FolderCreateOrConnectWithoutTeacherInput[]
    createMany?: FolderCreateManyTeacherInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type TestUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TestCreateWithoutTeacherInput, TestUncheckedCreateWithoutTeacherInput> | TestCreateWithoutTeacherInput[] | TestUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TestCreateOrConnectWithoutTeacherInput | TestCreateOrConnectWithoutTeacherInput[]
    createMany?: TestCreateManyTeacherInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<StudentCreateWithoutTeacherInput, StudentUncheckedCreateWithoutTeacherInput> | StudentCreateWithoutTeacherInput[] | StudentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutTeacherInput | StudentCreateOrConnectWithoutTeacherInput[]
    createMany?: StudentCreateManyTeacherInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ScheduleCreateWithoutTeacherInput, ScheduleUncheckedCreateWithoutTeacherInput> | ScheduleCreateWithoutTeacherInput[] | ScheduleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutTeacherInput | ScheduleCreateOrConnectWithoutTeacherInput[]
    createMany?: ScheduleCreateManyTeacherInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<GroupCreateWithoutTeacherInput, GroupUncheckedCreateWithoutTeacherInput> | GroupCreateWithoutTeacherInput[] | GroupUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutTeacherInput | GroupCreateOrConnectWithoutTeacherInput[]
    createMany?: GroupCreateManyTeacherInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type FolderUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<FolderCreateWithoutTeacherInput, FolderUncheckedCreateWithoutTeacherInput> | FolderCreateWithoutTeacherInput[] | FolderUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutTeacherInput | FolderCreateOrConnectWithoutTeacherInput[]
    createMany?: FolderCreateManyTeacherInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumSubjectFieldUpdateOperationsInput = {
    set?: $Enums.Subject
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TestUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TestCreateWithoutTeacherInput, TestUncheckedCreateWithoutTeacherInput> | TestCreateWithoutTeacherInput[] | TestUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TestCreateOrConnectWithoutTeacherInput | TestCreateOrConnectWithoutTeacherInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutTeacherInput | TestUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TestCreateManyTeacherInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutTeacherInput | TestUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TestUpdateManyWithWhereWithoutTeacherInput | TestUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<StudentCreateWithoutTeacherInput, StudentUncheckedCreateWithoutTeacherInput> | StudentCreateWithoutTeacherInput[] | StudentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutTeacherInput | StudentCreateOrConnectWithoutTeacherInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutTeacherInput | StudentUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: StudentCreateManyTeacherInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutTeacherInput | StudentUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutTeacherInput | StudentUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ScheduleCreateWithoutTeacherInput, ScheduleUncheckedCreateWithoutTeacherInput> | ScheduleCreateWithoutTeacherInput[] | ScheduleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutTeacherInput | ScheduleCreateOrConnectWithoutTeacherInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutTeacherInput | ScheduleUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ScheduleCreateManyTeacherInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutTeacherInput | ScheduleUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutTeacherInput | ScheduleUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<GroupCreateWithoutTeacherInput, GroupUncheckedCreateWithoutTeacherInput> | GroupCreateWithoutTeacherInput[] | GroupUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutTeacherInput | GroupCreateOrConnectWithoutTeacherInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutTeacherInput | GroupUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: GroupCreateManyTeacherInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutTeacherInput | GroupUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutTeacherInput | GroupUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type FolderUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<FolderCreateWithoutTeacherInput, FolderUncheckedCreateWithoutTeacherInput> | FolderCreateWithoutTeacherInput[] | FolderUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutTeacherInput | FolderCreateOrConnectWithoutTeacherInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutTeacherInput | FolderUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: FolderCreateManyTeacherInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutTeacherInput | FolderUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutTeacherInput | FolderUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type TestUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TestCreateWithoutTeacherInput, TestUncheckedCreateWithoutTeacherInput> | TestCreateWithoutTeacherInput[] | TestUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TestCreateOrConnectWithoutTeacherInput | TestCreateOrConnectWithoutTeacherInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutTeacherInput | TestUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TestCreateManyTeacherInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutTeacherInput | TestUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TestUpdateManyWithWhereWithoutTeacherInput | TestUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<StudentCreateWithoutTeacherInput, StudentUncheckedCreateWithoutTeacherInput> | StudentCreateWithoutTeacherInput[] | StudentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutTeacherInput | StudentCreateOrConnectWithoutTeacherInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutTeacherInput | StudentUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: StudentCreateManyTeacherInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutTeacherInput | StudentUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutTeacherInput | StudentUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ScheduleCreateWithoutTeacherInput, ScheduleUncheckedCreateWithoutTeacherInput> | ScheduleCreateWithoutTeacherInput[] | ScheduleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutTeacherInput | ScheduleCreateOrConnectWithoutTeacherInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutTeacherInput | ScheduleUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ScheduleCreateManyTeacherInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutTeacherInput | ScheduleUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutTeacherInput | ScheduleUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<GroupCreateWithoutTeacherInput, GroupUncheckedCreateWithoutTeacherInput> | GroupCreateWithoutTeacherInput[] | GroupUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutTeacherInput | GroupCreateOrConnectWithoutTeacherInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutTeacherInput | GroupUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: GroupCreateManyTeacherInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutTeacherInput | GroupUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutTeacherInput | GroupUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type FolderUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<FolderCreateWithoutTeacherInput, FolderUncheckedCreateWithoutTeacherInput> | FolderCreateWithoutTeacherInput[] | FolderUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutTeacherInput | FolderCreateOrConnectWithoutTeacherInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutTeacherInput | FolderUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: FolderCreateManyTeacherInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutTeacherInput | FolderUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutTeacherInput | FolderUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type TestCreateNestedManyWithoutFolderInput = {
    create?: XOR<TestCreateWithoutFolderInput, TestUncheckedCreateWithoutFolderInput> | TestCreateWithoutFolderInput[] | TestUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: TestCreateOrConnectWithoutFolderInput | TestCreateOrConnectWithoutFolderInput[]
    createMany?: TestCreateManyFolderInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type TeacherCreateNestedOneWithoutFoldersInput = {
    create?: XOR<TeacherCreateWithoutFoldersInput, TeacherUncheckedCreateWithoutFoldersInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutFoldersInput
    connect?: TeacherWhereUniqueInput
  }

  export type TestUncheckedCreateNestedManyWithoutFolderInput = {
    create?: XOR<TestCreateWithoutFolderInput, TestUncheckedCreateWithoutFolderInput> | TestCreateWithoutFolderInput[] | TestUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: TestCreateOrConnectWithoutFolderInput | TestCreateOrConnectWithoutFolderInput[]
    createMany?: TestCreateManyFolderInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type TestUpdateManyWithoutFolderNestedInput = {
    create?: XOR<TestCreateWithoutFolderInput, TestUncheckedCreateWithoutFolderInput> | TestCreateWithoutFolderInput[] | TestUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: TestCreateOrConnectWithoutFolderInput | TestCreateOrConnectWithoutFolderInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutFolderInput | TestUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: TestCreateManyFolderInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutFolderInput | TestUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: TestUpdateManyWithWhereWithoutFolderInput | TestUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type TeacherUpdateOneWithoutFoldersNestedInput = {
    create?: XOR<TeacherCreateWithoutFoldersInput, TeacherUncheckedCreateWithoutFoldersInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutFoldersInput
    upsert?: TeacherUpsertWithoutFoldersInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutFoldersInput, TeacherUpdateWithoutFoldersInput>, TeacherUncheckedUpdateWithoutFoldersInput>
  }

  export type TestUncheckedUpdateManyWithoutFolderNestedInput = {
    create?: XOR<TestCreateWithoutFolderInput, TestUncheckedCreateWithoutFolderInput> | TestCreateWithoutFolderInput[] | TestUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: TestCreateOrConnectWithoutFolderInput | TestCreateOrConnectWithoutFolderInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutFolderInput | TestUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: TestCreateManyFolderInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutFolderInput | TestUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: TestUpdateManyWithWhereWithoutFolderInput | TestUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type StudentScoreCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentScoreCreateWithoutStudentInput, StudentScoreUncheckedCreateWithoutStudentInput> | StudentScoreCreateWithoutStudentInput[] | StudentScoreUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentScoreCreateOrConnectWithoutStudentInput | StudentScoreCreateOrConnectWithoutStudentInput[]
    createMany?: StudentScoreCreateManyStudentInputEnvelope
    connect?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
  }

  export type AssignedTestCreateNestedManyWithoutStudentInput = {
    create?: XOR<AssignedTestCreateWithoutStudentInput, AssignedTestUncheckedCreateWithoutStudentInput> | AssignedTestCreateWithoutStudentInput[] | AssignedTestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignedTestCreateOrConnectWithoutStudentInput | AssignedTestCreateOrConnectWithoutStudentInput[]
    createMany?: AssignedTestCreateManyStudentInputEnvelope
    connect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
  }

  export type TeacherCreateNestedOneWithoutStudentsInput = {
    create?: XOR<TeacherCreateWithoutStudentsInput, TeacherUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutStudentsInput
    connect?: TeacherWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutStudentsInput = {
    create?: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStudentsInput
    connect?: GroupWhereUniqueInput
  }

  export type StudentScoreUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentScoreCreateWithoutStudentInput, StudentScoreUncheckedCreateWithoutStudentInput> | StudentScoreCreateWithoutStudentInput[] | StudentScoreUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentScoreCreateOrConnectWithoutStudentInput | StudentScoreCreateOrConnectWithoutStudentInput[]
    createMany?: StudentScoreCreateManyStudentInputEnvelope
    connect?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
  }

  export type AssignedTestUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AssignedTestCreateWithoutStudentInput, AssignedTestUncheckedCreateWithoutStudentInput> | AssignedTestCreateWithoutStudentInput[] | AssignedTestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignedTestCreateOrConnectWithoutStudentInput | AssignedTestCreateOrConnectWithoutStudentInput[]
    createMany?: AssignedTestCreateManyStudentInputEnvelope
    connect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
  }

  export type NullableEnumSubjectFieldUpdateOperationsInput = {
    set?: $Enums.Subject | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StudentScoreUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentScoreCreateWithoutStudentInput, StudentScoreUncheckedCreateWithoutStudentInput> | StudentScoreCreateWithoutStudentInput[] | StudentScoreUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentScoreCreateOrConnectWithoutStudentInput | StudentScoreCreateOrConnectWithoutStudentInput[]
    upsert?: StudentScoreUpsertWithWhereUniqueWithoutStudentInput | StudentScoreUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentScoreCreateManyStudentInputEnvelope
    set?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    disconnect?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    delete?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    connect?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    update?: StudentScoreUpdateWithWhereUniqueWithoutStudentInput | StudentScoreUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentScoreUpdateManyWithWhereWithoutStudentInput | StudentScoreUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentScoreScalarWhereInput | StudentScoreScalarWhereInput[]
  }

  export type AssignedTestUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AssignedTestCreateWithoutStudentInput, AssignedTestUncheckedCreateWithoutStudentInput> | AssignedTestCreateWithoutStudentInput[] | AssignedTestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignedTestCreateOrConnectWithoutStudentInput | AssignedTestCreateOrConnectWithoutStudentInput[]
    upsert?: AssignedTestUpsertWithWhereUniqueWithoutStudentInput | AssignedTestUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AssignedTestCreateManyStudentInputEnvelope
    set?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    disconnect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    delete?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    connect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    update?: AssignedTestUpdateWithWhereUniqueWithoutStudentInput | AssignedTestUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AssignedTestUpdateManyWithWhereWithoutStudentInput | AssignedTestUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AssignedTestScalarWhereInput | AssignedTestScalarWhereInput[]
  }

  export type TeacherUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<TeacherCreateWithoutStudentsInput, TeacherUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutStudentsInput
    upsert?: TeacherUpsertWithoutStudentsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutStudentsInput, TeacherUpdateWithoutStudentsInput>, TeacherUncheckedUpdateWithoutStudentsInput>
  }

  export type GroupUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStudentsInput
    upsert?: GroupUpsertWithoutStudentsInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutStudentsInput, GroupUpdateWithoutStudentsInput>, GroupUncheckedUpdateWithoutStudentsInput>
  }

  export type StudentScoreUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentScoreCreateWithoutStudentInput, StudentScoreUncheckedCreateWithoutStudentInput> | StudentScoreCreateWithoutStudentInput[] | StudentScoreUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentScoreCreateOrConnectWithoutStudentInput | StudentScoreCreateOrConnectWithoutStudentInput[]
    upsert?: StudentScoreUpsertWithWhereUniqueWithoutStudentInput | StudentScoreUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentScoreCreateManyStudentInputEnvelope
    set?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    disconnect?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    delete?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    connect?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    update?: StudentScoreUpdateWithWhereUniqueWithoutStudentInput | StudentScoreUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentScoreUpdateManyWithWhereWithoutStudentInput | StudentScoreUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentScoreScalarWhereInput | StudentScoreScalarWhereInput[]
  }

  export type AssignedTestUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AssignedTestCreateWithoutStudentInput, AssignedTestUncheckedCreateWithoutStudentInput> | AssignedTestCreateWithoutStudentInput[] | AssignedTestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignedTestCreateOrConnectWithoutStudentInput | AssignedTestCreateOrConnectWithoutStudentInput[]
    upsert?: AssignedTestUpsertWithWhereUniqueWithoutStudentInput | AssignedTestUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AssignedTestCreateManyStudentInputEnvelope
    set?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    disconnect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    delete?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    connect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    update?: AssignedTestUpdateWithWhereUniqueWithoutStudentInput | AssignedTestUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AssignedTestUpdateManyWithWhereWithoutStudentInput | AssignedTestUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AssignedTestScalarWhereInput | AssignedTestScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutScoresInput = {
    create?: XOR<StudentCreateWithoutScoresInput, StudentUncheckedCreateWithoutScoresInput>
    connectOrCreate?: StudentCreateOrConnectWithoutScoresInput
    connect?: StudentWhereUniqueInput
  }

  export type TestCreateNestedOneWithoutStudentScoresInput = {
    create?: XOR<TestCreateWithoutStudentScoresInput, TestUncheckedCreateWithoutStudentScoresInput>
    connectOrCreate?: TestCreateOrConnectWithoutStudentScoresInput
    connect?: TestWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<StudentCreateWithoutScoresInput, StudentUncheckedCreateWithoutScoresInput>
    connectOrCreate?: StudentCreateOrConnectWithoutScoresInput
    upsert?: StudentUpsertWithoutScoresInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutScoresInput, StudentUpdateWithoutScoresInput>, StudentUncheckedUpdateWithoutScoresInput>
  }

  export type TestUpdateOneRequiredWithoutStudentScoresNestedInput = {
    create?: XOR<TestCreateWithoutStudentScoresInput, TestUncheckedCreateWithoutStudentScoresInput>
    connectOrCreate?: TestCreateOrConnectWithoutStudentScoresInput
    upsert?: TestUpsertWithoutStudentScoresInput
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutStudentScoresInput, TestUpdateWithoutStudentScoresInput>, TestUncheckedUpdateWithoutStudentScoresInput>
  }

  export type TeacherCreateNestedOneWithoutTestsInput = {
    create?: XOR<TeacherCreateWithoutTestsInput, TeacherUncheckedCreateWithoutTestsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutTestsInput
    connect?: TeacherWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutTestsInput = {
    create?: XOR<AdminCreateWithoutTestsInput, AdminUncheckedCreateWithoutTestsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutTestsInput
    connect?: AdminWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutTestInput = {
    create?: XOR<TaskCreateWithoutTestInput, TaskUncheckedCreateWithoutTestInput> | TaskCreateWithoutTestInput[] | TaskUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTestInput | TaskCreateOrConnectWithoutTestInput[]
    createMany?: TaskCreateManyTestInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type StudentScoreCreateNestedManyWithoutTestInput = {
    create?: XOR<StudentScoreCreateWithoutTestInput, StudentScoreUncheckedCreateWithoutTestInput> | StudentScoreCreateWithoutTestInput[] | StudentScoreUncheckedCreateWithoutTestInput[]
    connectOrCreate?: StudentScoreCreateOrConnectWithoutTestInput | StudentScoreCreateOrConnectWithoutTestInput[]
    createMany?: StudentScoreCreateManyTestInputEnvelope
    connect?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
  }

  export type AssignedTestCreateNestedManyWithoutTestInput = {
    create?: XOR<AssignedTestCreateWithoutTestInput, AssignedTestUncheckedCreateWithoutTestInput> | AssignedTestCreateWithoutTestInput[] | AssignedTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: AssignedTestCreateOrConnectWithoutTestInput | AssignedTestCreateOrConnectWithoutTestInput[]
    createMany?: AssignedTestCreateManyTestInputEnvelope
    connect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
  }

  export type SubTopicCreateNestedOneWithoutTestsInput = {
    create?: XOR<SubTopicCreateWithoutTestsInput, SubTopicUncheckedCreateWithoutTestsInput>
    connectOrCreate?: SubTopicCreateOrConnectWithoutTestsInput
    connect?: SubTopicWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutTestsInput = {
    create?: XOR<GroupCreateWithoutTestsInput, GroupUncheckedCreateWithoutTestsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTestsInput
    connect?: GroupWhereUniqueInput
  }

  export type FolderCreateNestedOneWithoutTestsInput = {
    create?: XOR<FolderCreateWithoutTestsInput, FolderUncheckedCreateWithoutTestsInput>
    connectOrCreate?: FolderCreateOrConnectWithoutTestsInput
    connect?: FolderWhereUniqueInput
  }

  export type TaskUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<TaskCreateWithoutTestInput, TaskUncheckedCreateWithoutTestInput> | TaskCreateWithoutTestInput[] | TaskUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTestInput | TaskCreateOrConnectWithoutTestInput[]
    createMany?: TaskCreateManyTestInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type StudentScoreUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<StudentScoreCreateWithoutTestInput, StudentScoreUncheckedCreateWithoutTestInput> | StudentScoreCreateWithoutTestInput[] | StudentScoreUncheckedCreateWithoutTestInput[]
    connectOrCreate?: StudentScoreCreateOrConnectWithoutTestInput | StudentScoreCreateOrConnectWithoutTestInput[]
    createMany?: StudentScoreCreateManyTestInputEnvelope
    connect?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
  }

  export type AssignedTestUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<AssignedTestCreateWithoutTestInput, AssignedTestUncheckedCreateWithoutTestInput> | AssignedTestCreateWithoutTestInput[] | AssignedTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: AssignedTestCreateOrConnectWithoutTestInput | AssignedTestCreateOrConnectWithoutTestInput[]
    createMany?: AssignedTestCreateManyTestInputEnvelope
    connect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTestStatusFieldUpdateOperationsInput = {
    set?: $Enums.TestStatus
  }

  export type TeacherUpdateOneWithoutTestsNestedInput = {
    create?: XOR<TeacherCreateWithoutTestsInput, TeacherUncheckedCreateWithoutTestsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutTestsInput
    upsert?: TeacherUpsertWithoutTestsInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutTestsInput, TeacherUpdateWithoutTestsInput>, TeacherUncheckedUpdateWithoutTestsInput>
  }

  export type AdminUpdateOneWithoutTestsNestedInput = {
    create?: XOR<AdminCreateWithoutTestsInput, AdminUncheckedCreateWithoutTestsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutTestsInput
    upsert?: AdminUpsertWithoutTestsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutTestsInput, AdminUpdateWithoutTestsInput>, AdminUncheckedUpdateWithoutTestsInput>
  }

  export type TaskUpdateManyWithoutTestNestedInput = {
    create?: XOR<TaskCreateWithoutTestInput, TaskUncheckedCreateWithoutTestInput> | TaskCreateWithoutTestInput[] | TaskUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTestInput | TaskCreateOrConnectWithoutTestInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTestInput | TaskUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: TaskCreateManyTestInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTestInput | TaskUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTestInput | TaskUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type StudentScoreUpdateManyWithoutTestNestedInput = {
    create?: XOR<StudentScoreCreateWithoutTestInput, StudentScoreUncheckedCreateWithoutTestInput> | StudentScoreCreateWithoutTestInput[] | StudentScoreUncheckedCreateWithoutTestInput[]
    connectOrCreate?: StudentScoreCreateOrConnectWithoutTestInput | StudentScoreCreateOrConnectWithoutTestInput[]
    upsert?: StudentScoreUpsertWithWhereUniqueWithoutTestInput | StudentScoreUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: StudentScoreCreateManyTestInputEnvelope
    set?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    disconnect?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    delete?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    connect?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    update?: StudentScoreUpdateWithWhereUniqueWithoutTestInput | StudentScoreUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: StudentScoreUpdateManyWithWhereWithoutTestInput | StudentScoreUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: StudentScoreScalarWhereInput | StudentScoreScalarWhereInput[]
  }

  export type AssignedTestUpdateManyWithoutTestNestedInput = {
    create?: XOR<AssignedTestCreateWithoutTestInput, AssignedTestUncheckedCreateWithoutTestInput> | AssignedTestCreateWithoutTestInput[] | AssignedTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: AssignedTestCreateOrConnectWithoutTestInput | AssignedTestCreateOrConnectWithoutTestInput[]
    upsert?: AssignedTestUpsertWithWhereUniqueWithoutTestInput | AssignedTestUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: AssignedTestCreateManyTestInputEnvelope
    set?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    disconnect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    delete?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    connect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    update?: AssignedTestUpdateWithWhereUniqueWithoutTestInput | AssignedTestUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: AssignedTestUpdateManyWithWhereWithoutTestInput | AssignedTestUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: AssignedTestScalarWhereInput | AssignedTestScalarWhereInput[]
  }

  export type SubTopicUpdateOneWithoutTestsNestedInput = {
    create?: XOR<SubTopicCreateWithoutTestsInput, SubTopicUncheckedCreateWithoutTestsInput>
    connectOrCreate?: SubTopicCreateOrConnectWithoutTestsInput
    upsert?: SubTopicUpsertWithoutTestsInput
    disconnect?: SubTopicWhereInput | boolean
    delete?: SubTopicWhereInput | boolean
    connect?: SubTopicWhereUniqueInput
    update?: XOR<XOR<SubTopicUpdateToOneWithWhereWithoutTestsInput, SubTopicUpdateWithoutTestsInput>, SubTopicUncheckedUpdateWithoutTestsInput>
  }

  export type GroupUpdateOneWithoutTestsNestedInput = {
    create?: XOR<GroupCreateWithoutTestsInput, GroupUncheckedCreateWithoutTestsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTestsInput
    upsert?: GroupUpsertWithoutTestsInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutTestsInput, GroupUpdateWithoutTestsInput>, GroupUncheckedUpdateWithoutTestsInput>
  }

  export type FolderUpdateOneWithoutTestsNestedInput = {
    create?: XOR<FolderCreateWithoutTestsInput, FolderUncheckedCreateWithoutTestsInput>
    connectOrCreate?: FolderCreateOrConnectWithoutTestsInput
    upsert?: FolderUpsertWithoutTestsInput
    disconnect?: FolderWhereInput | boolean
    delete?: FolderWhereInput | boolean
    connect?: FolderWhereUniqueInput
    update?: XOR<XOR<FolderUpdateToOneWithWhereWithoutTestsInput, FolderUpdateWithoutTestsInput>, FolderUncheckedUpdateWithoutTestsInput>
  }

  export type TaskUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<TaskCreateWithoutTestInput, TaskUncheckedCreateWithoutTestInput> | TaskCreateWithoutTestInput[] | TaskUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTestInput | TaskCreateOrConnectWithoutTestInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTestInput | TaskUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: TaskCreateManyTestInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTestInput | TaskUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTestInput | TaskUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type StudentScoreUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<StudentScoreCreateWithoutTestInput, StudentScoreUncheckedCreateWithoutTestInput> | StudentScoreCreateWithoutTestInput[] | StudentScoreUncheckedCreateWithoutTestInput[]
    connectOrCreate?: StudentScoreCreateOrConnectWithoutTestInput | StudentScoreCreateOrConnectWithoutTestInput[]
    upsert?: StudentScoreUpsertWithWhereUniqueWithoutTestInput | StudentScoreUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: StudentScoreCreateManyTestInputEnvelope
    set?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    disconnect?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    delete?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    connect?: StudentScoreWhereUniqueInput | StudentScoreWhereUniqueInput[]
    update?: StudentScoreUpdateWithWhereUniqueWithoutTestInput | StudentScoreUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: StudentScoreUpdateManyWithWhereWithoutTestInput | StudentScoreUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: StudentScoreScalarWhereInput | StudentScoreScalarWhereInput[]
  }

  export type AssignedTestUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<AssignedTestCreateWithoutTestInput, AssignedTestUncheckedCreateWithoutTestInput> | AssignedTestCreateWithoutTestInput[] | AssignedTestUncheckedCreateWithoutTestInput[]
    connectOrCreate?: AssignedTestCreateOrConnectWithoutTestInput | AssignedTestCreateOrConnectWithoutTestInput[]
    upsert?: AssignedTestUpsertWithWhereUniqueWithoutTestInput | AssignedTestUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: AssignedTestCreateManyTestInputEnvelope
    set?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    disconnect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    delete?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    connect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    update?: AssignedTestUpdateWithWhereUniqueWithoutTestInput | AssignedTestUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: AssignedTestUpdateManyWithWhereWithoutTestInput | AssignedTestUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: AssignedTestScalarWhereInput | AssignedTestScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutAssignedTestsInput = {
    create?: XOR<StudentCreateWithoutAssignedTestsInput, StudentUncheckedCreateWithoutAssignedTestsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAssignedTestsInput
    connect?: StudentWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutAssignedTestsInput = {
    create?: XOR<GroupCreateWithoutAssignedTestsInput, GroupUncheckedCreateWithoutAssignedTestsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutAssignedTestsInput
    connect?: GroupWhereUniqueInput
  }

  export type TestCreateNestedOneWithoutAssignedToInput = {
    create?: XOR<TestCreateWithoutAssignedToInput, TestUncheckedCreateWithoutAssignedToInput>
    connectOrCreate?: TestCreateOrConnectWithoutAssignedToInput
    connect?: TestWhereUniqueInput
  }

  export type StudentUpdateOneWithoutAssignedTestsNestedInput = {
    create?: XOR<StudentCreateWithoutAssignedTestsInput, StudentUncheckedCreateWithoutAssignedTestsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAssignedTestsInput
    upsert?: StudentUpsertWithoutAssignedTestsInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAssignedTestsInput, StudentUpdateWithoutAssignedTestsInput>, StudentUncheckedUpdateWithoutAssignedTestsInput>
  }

  export type GroupUpdateOneWithoutAssignedTestsNestedInput = {
    create?: XOR<GroupCreateWithoutAssignedTestsInput, GroupUncheckedCreateWithoutAssignedTestsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutAssignedTestsInput
    upsert?: GroupUpsertWithoutAssignedTestsInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutAssignedTestsInput, GroupUpdateWithoutAssignedTestsInput>, GroupUncheckedUpdateWithoutAssignedTestsInput>
  }

  export type TestUpdateOneRequiredWithoutAssignedToNestedInput = {
    create?: XOR<TestCreateWithoutAssignedToInput, TestUncheckedCreateWithoutAssignedToInput>
    connectOrCreate?: TestCreateOrConnectWithoutAssignedToInput
    upsert?: TestUpsertWithoutAssignedToInput
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutAssignedToInput, TestUpdateWithoutAssignedToInput>, TestUncheckedUpdateWithoutAssignedToInput>
  }

  export type TestCreateNestedOneWithoutTasksInput = {
    create?: XOR<TestCreateWithoutTasksInput, TestUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TestCreateOrConnectWithoutTasksInput
    connect?: TestWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type TestUpdateOneWithoutTasksNestedInput = {
    create?: XOR<TestCreateWithoutTasksInput, TestUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TestCreateOrConnectWithoutTasksInput
    upsert?: TestUpsertWithoutTasksInput
    disconnect?: TestWhereInput | boolean
    delete?: TestWhereInput | boolean
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutTasksInput, TestUpdateWithoutTasksInput>, TestUncheckedUpdateWithoutTasksInput>
  }

  export type TeacherCreateNestedOneWithoutScheduleInput = {
    create?: XOR<TeacherCreateWithoutScheduleInput, TeacherUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutScheduleInput
    connect?: TeacherWhereUniqueInput
  }

  export type TeacherUpdateOneRequiredWithoutScheduleNestedInput = {
    create?: XOR<TeacherCreateWithoutScheduleInput, TeacherUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutScheduleInput
    upsert?: TeacherUpsertWithoutScheduleInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutScheduleInput, TeacherUpdateWithoutScheduleInput>, TeacherUncheckedUpdateWithoutScheduleInput>
  }

  export type TeacherCreateNestedOneWithoutGroupsInput = {
    create?: XOR<TeacherCreateWithoutGroupsInput, TeacherUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutGroupsInput
    connect?: TeacherWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutGroupInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type TestCreateNestedManyWithoutGroupInput = {
    create?: XOR<TestCreateWithoutGroupInput, TestUncheckedCreateWithoutGroupInput> | TestCreateWithoutGroupInput[] | TestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TestCreateOrConnectWithoutGroupInput | TestCreateOrConnectWithoutGroupInput[]
    createMany?: TestCreateManyGroupInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type AssignedTestCreateNestedManyWithoutGroupInput = {
    create?: XOR<AssignedTestCreateWithoutGroupInput, AssignedTestUncheckedCreateWithoutGroupInput> | AssignedTestCreateWithoutGroupInput[] | AssignedTestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: AssignedTestCreateOrConnectWithoutGroupInput | AssignedTestCreateOrConnectWithoutGroupInput[]
    createMany?: AssignedTestCreateManyGroupInputEnvelope
    connect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type TestUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<TestCreateWithoutGroupInput, TestUncheckedCreateWithoutGroupInput> | TestCreateWithoutGroupInput[] | TestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TestCreateOrConnectWithoutGroupInput | TestCreateOrConnectWithoutGroupInput[]
    createMany?: TestCreateManyGroupInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type AssignedTestUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<AssignedTestCreateWithoutGroupInput, AssignedTestUncheckedCreateWithoutGroupInput> | AssignedTestCreateWithoutGroupInput[] | AssignedTestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: AssignedTestCreateOrConnectWithoutGroupInput | AssignedTestCreateOrConnectWithoutGroupInput[]
    createMany?: AssignedTestCreateManyGroupInputEnvelope
    connect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
  }

  export type TeacherUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<TeacherCreateWithoutGroupsInput, TeacherUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutGroupsInput
    upsert?: TeacherUpsertWithoutGroupsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutGroupsInput, TeacherUpdateWithoutGroupsInput>, TeacherUncheckedUpdateWithoutGroupsInput>
  }

  export type StudentUpdateManyWithoutGroupNestedInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutGroupInput | StudentUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutGroupInput | StudentUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutGroupInput | StudentUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type TestUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TestCreateWithoutGroupInput, TestUncheckedCreateWithoutGroupInput> | TestCreateWithoutGroupInput[] | TestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TestCreateOrConnectWithoutGroupInput | TestCreateOrConnectWithoutGroupInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutGroupInput | TestUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TestCreateManyGroupInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutGroupInput | TestUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TestUpdateManyWithWhereWithoutGroupInput | TestUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type AssignedTestUpdateManyWithoutGroupNestedInput = {
    create?: XOR<AssignedTestCreateWithoutGroupInput, AssignedTestUncheckedCreateWithoutGroupInput> | AssignedTestCreateWithoutGroupInput[] | AssignedTestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: AssignedTestCreateOrConnectWithoutGroupInput | AssignedTestCreateOrConnectWithoutGroupInput[]
    upsert?: AssignedTestUpsertWithWhereUniqueWithoutGroupInput | AssignedTestUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: AssignedTestCreateManyGroupInputEnvelope
    set?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    disconnect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    delete?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    connect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    update?: AssignedTestUpdateWithWhereUniqueWithoutGroupInput | AssignedTestUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: AssignedTestUpdateManyWithWhereWithoutGroupInput | AssignedTestUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: AssignedTestScalarWhereInput | AssignedTestScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutGroupInput | StudentUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutGroupInput | StudentUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutGroupInput | StudentUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type TestUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TestCreateWithoutGroupInput, TestUncheckedCreateWithoutGroupInput> | TestCreateWithoutGroupInput[] | TestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TestCreateOrConnectWithoutGroupInput | TestCreateOrConnectWithoutGroupInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutGroupInput | TestUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TestCreateManyGroupInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutGroupInput | TestUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TestUpdateManyWithWhereWithoutGroupInput | TestUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type AssignedTestUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<AssignedTestCreateWithoutGroupInput, AssignedTestUncheckedCreateWithoutGroupInput> | AssignedTestCreateWithoutGroupInput[] | AssignedTestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: AssignedTestCreateOrConnectWithoutGroupInput | AssignedTestCreateOrConnectWithoutGroupInput[]
    upsert?: AssignedTestUpsertWithWhereUniqueWithoutGroupInput | AssignedTestUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: AssignedTestCreateManyGroupInputEnvelope
    set?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    disconnect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    delete?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    connect?: AssignedTestWhereUniqueInput | AssignedTestWhereUniqueInput[]
    update?: AssignedTestUpdateWithWhereUniqueWithoutGroupInput | AssignedTestUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: AssignedTestUpdateManyWithWhereWithoutGroupInput | AssignedTestUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: AssignedTestScalarWhereInput | AssignedTestScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumSubjectFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel>
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectFilter<$PrismaModel> | $Enums.Subject
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSubjectWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel>
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel>
    not?: NestedEnumSubjectWithAggregatesFilter<$PrismaModel> | $Enums.Subject
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubjectFilter<$PrismaModel>
    _max?: NestedEnumSubjectFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSubjectNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubjectNullableFilter<$PrismaModel> | $Enums.Subject | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSubjectNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subject[] | ListEnumSubjectFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubjectNullableWithAggregatesFilter<$PrismaModel> | $Enums.Subject | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSubjectNullableFilter<$PrismaModel>
    _max?: NestedEnumSubjectNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TestStatus | EnumTestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TestStatus[] | ListEnumTestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestStatus[] | ListEnumTestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTestStatusFilter<$PrismaModel> | $Enums.TestStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestStatus | EnumTestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TestStatus[] | ListEnumTestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestStatus[] | ListEnumTestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTestStatusWithAggregatesFilter<$PrismaModel> | $Enums.TestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTestStatusFilter<$PrismaModel>
    _max?: NestedEnumTestStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type TopicCreateWithoutAdminInput = {
    id?: string
    subjectType: string
    name: string
    number: string
    createdAt?: Date | string
    subTopics?: SubTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutAdminInput = {
    id?: string
    subjectType: string
    name: string
    number: string
    createdAt?: Date | string
    subTopics?: SubTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutAdminInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutAdminInput, TopicUncheckedCreateWithoutAdminInput>
  }

  export type TopicCreateManyAdminInputEnvelope = {
    data: TopicCreateManyAdminInput | TopicCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type TestCreateWithoutAdminInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    status?: $Enums.TestStatus
    teacher?: TeacherCreateNestedOneWithoutTestsInput
    tasks?: TaskCreateNestedManyWithoutTestInput
    studentScores?: StudentScoreCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestCreateNestedManyWithoutTestInput
    subTopic?: SubTopicCreateNestedOneWithoutTestsInput
    group?: GroupCreateNestedOneWithoutTestsInput
    folder?: FolderCreateNestedOneWithoutTestsInput
  }

  export type TestUncheckedCreateWithoutAdminInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    teacherId?: string | null
    status?: $Enums.TestStatus
    subTopicId?: string | null
    groupId?: string | null
    folderId?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutTestInput
    studentScores?: StudentScoreUncheckedCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutAdminInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutAdminInput, TestUncheckedCreateWithoutAdminInput>
  }

  export type TestCreateManyAdminInputEnvelope = {
    data: TestCreateManyAdminInput | TestCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type TopicUpsertWithWhereUniqueWithoutAdminInput = {
    where: TopicWhereUniqueInput
    update: XOR<TopicUpdateWithoutAdminInput, TopicUncheckedUpdateWithoutAdminInput>
    create: XOR<TopicCreateWithoutAdminInput, TopicUncheckedCreateWithoutAdminInput>
  }

  export type TopicUpdateWithWhereUniqueWithoutAdminInput = {
    where: TopicWhereUniqueInput
    data: XOR<TopicUpdateWithoutAdminInput, TopicUncheckedUpdateWithoutAdminInput>
  }

  export type TopicUpdateManyWithWhereWithoutAdminInput = {
    where: TopicScalarWhereInput
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyWithoutAdminInput>
  }

  export type TopicScalarWhereInput = {
    AND?: TopicScalarWhereInput | TopicScalarWhereInput[]
    OR?: TopicScalarWhereInput[]
    NOT?: TopicScalarWhereInput | TopicScalarWhereInput[]
    id?: StringFilter<"Topic"> | string
    subjectType?: StringFilter<"Topic"> | string
    name?: StringFilter<"Topic"> | string
    number?: StringFilter<"Topic"> | string
    adminId?: StringFilter<"Topic"> | string
    createdAt?: DateTimeFilter<"Topic"> | Date | string
  }

  export type TestUpsertWithWhereUniqueWithoutAdminInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutAdminInput, TestUncheckedUpdateWithoutAdminInput>
    create: XOR<TestCreateWithoutAdminInput, TestUncheckedCreateWithoutAdminInput>
  }

  export type TestUpdateWithWhereUniqueWithoutAdminInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutAdminInput, TestUncheckedUpdateWithoutAdminInput>
  }

  export type TestUpdateManyWithWhereWithoutAdminInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutAdminInput>
  }

  export type TestScalarWhereInput = {
    AND?: TestScalarWhereInput | TestScalarWhereInput[]
    OR?: TestScalarWhereInput[]
    NOT?: TestScalarWhereInput | TestScalarWhereInput[]
    id?: StringFilter<"Test"> | string
    title?: StringNullableFilter<"Test"> | string | null
    timeLimit?: IntNullableFilter<"Test"> | number | null
    description?: StringNullableFilter<"Test"> | string | null
    score?: StringNullableFilter<"Test"> | string | null
    startTime?: DateTimeNullableFilter<"Test"> | Date | string | null
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
    testTYpe?: StringNullableFilter<"Test"> | string | null
    testTheme?: StringNullableFilter<"Test"> | string | null
    teacherId?: StringNullableFilter<"Test"> | string | null
    adminID?: StringNullableFilter<"Test"> | string | null
    status?: EnumTestStatusFilter<"Test"> | $Enums.TestStatus
    subTopicId?: StringNullableFilter<"Test"> | string | null
    groupId?: StringNullableFilter<"Test"> | string | null
    folderId?: StringNullableFilter<"Test"> | string | null
  }

  export type AdminCreateWithoutTopicsInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    tests?: TestCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutTopicsInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    tests?: TestUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutTopicsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutTopicsInput, AdminUncheckedCreateWithoutTopicsInput>
  }

  export type SubTopicCreateWithoutTopicInput = {
    id?: string
    name: string
    number: string
    tests?: TestCreateNestedManyWithoutSubTopicInput
  }

  export type SubTopicUncheckedCreateWithoutTopicInput = {
    id?: string
    name: string
    number: string
    tests?: TestUncheckedCreateNestedManyWithoutSubTopicInput
  }

  export type SubTopicCreateOrConnectWithoutTopicInput = {
    where: SubTopicWhereUniqueInput
    create: XOR<SubTopicCreateWithoutTopicInput, SubTopicUncheckedCreateWithoutTopicInput>
  }

  export type SubTopicCreateManyTopicInputEnvelope = {
    data: SubTopicCreateManyTopicInput | SubTopicCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutTopicsInput = {
    update: XOR<AdminUpdateWithoutTopicsInput, AdminUncheckedUpdateWithoutTopicsInput>
    create: XOR<AdminCreateWithoutTopicsInput, AdminUncheckedCreateWithoutTopicsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutTopicsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutTopicsInput, AdminUncheckedUpdateWithoutTopicsInput>
  }

  export type AdminUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tests?: TestUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tests?: TestUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type SubTopicUpsertWithWhereUniqueWithoutTopicInput = {
    where: SubTopicWhereUniqueInput
    update: XOR<SubTopicUpdateWithoutTopicInput, SubTopicUncheckedUpdateWithoutTopicInput>
    create: XOR<SubTopicCreateWithoutTopicInput, SubTopicUncheckedCreateWithoutTopicInput>
  }

  export type SubTopicUpdateWithWhereUniqueWithoutTopicInput = {
    where: SubTopicWhereUniqueInput
    data: XOR<SubTopicUpdateWithoutTopicInput, SubTopicUncheckedUpdateWithoutTopicInput>
  }

  export type SubTopicUpdateManyWithWhereWithoutTopicInput = {
    where: SubTopicScalarWhereInput
    data: XOR<SubTopicUpdateManyMutationInput, SubTopicUncheckedUpdateManyWithoutTopicInput>
  }

  export type SubTopicScalarWhereInput = {
    AND?: SubTopicScalarWhereInput | SubTopicScalarWhereInput[]
    OR?: SubTopicScalarWhereInput[]
    NOT?: SubTopicScalarWhereInput | SubTopicScalarWhereInput[]
    id?: StringFilter<"SubTopic"> | string
    name?: StringFilter<"SubTopic"> | string
    number?: StringFilter<"SubTopic"> | string
    topicId?: StringFilter<"SubTopic"> | string
  }

  export type TopicCreateWithoutSubTopicsInput = {
    id?: string
    subjectType: string
    name: string
    number: string
    createdAt?: Date | string
    admin: AdminCreateNestedOneWithoutTopicsInput
  }

  export type TopicUncheckedCreateWithoutSubTopicsInput = {
    id?: string
    subjectType: string
    name: string
    number: string
    adminId: string
    createdAt?: Date | string
  }

  export type TopicCreateOrConnectWithoutSubTopicsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutSubTopicsInput, TopicUncheckedCreateWithoutSubTopicsInput>
  }

  export type TestCreateWithoutSubTopicInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    status?: $Enums.TestStatus
    teacher?: TeacherCreateNestedOneWithoutTestsInput
    admin?: AdminCreateNestedOneWithoutTestsInput
    tasks?: TaskCreateNestedManyWithoutTestInput
    studentScores?: StudentScoreCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestCreateNestedManyWithoutTestInput
    group?: GroupCreateNestedOneWithoutTestsInput
    folder?: FolderCreateNestedOneWithoutTestsInput
  }

  export type TestUncheckedCreateWithoutSubTopicInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    teacherId?: string | null
    adminID?: string | null
    status?: $Enums.TestStatus
    groupId?: string | null
    folderId?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutTestInput
    studentScores?: StudentScoreUncheckedCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutSubTopicInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutSubTopicInput, TestUncheckedCreateWithoutSubTopicInput>
  }

  export type TestCreateManySubTopicInputEnvelope = {
    data: TestCreateManySubTopicInput | TestCreateManySubTopicInput[]
    skipDuplicates?: boolean
  }

  export type TopicUpsertWithoutSubTopicsInput = {
    update: XOR<TopicUpdateWithoutSubTopicsInput, TopicUncheckedUpdateWithoutSubTopicsInput>
    create: XOR<TopicCreateWithoutSubTopicsInput, TopicUncheckedCreateWithoutSubTopicsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutSubTopicsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutSubTopicsInput, TopicUncheckedUpdateWithoutSubTopicsInput>
  }

  export type TopicUpdateWithoutSubTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutTopicsNestedInput
  }

  export type TopicUncheckedUpdateWithoutSubTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUpsertWithWhereUniqueWithoutSubTopicInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutSubTopicInput, TestUncheckedUpdateWithoutSubTopicInput>
    create: XOR<TestCreateWithoutSubTopicInput, TestUncheckedCreateWithoutSubTopicInput>
  }

  export type TestUpdateWithWhereUniqueWithoutSubTopicInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutSubTopicInput, TestUncheckedUpdateWithoutSubTopicInput>
  }

  export type TestUpdateManyWithWhereWithoutSubTopicInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutSubTopicInput>
  }

  export type TestCreateWithoutTeacherInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    status?: $Enums.TestStatus
    admin?: AdminCreateNestedOneWithoutTestsInput
    tasks?: TaskCreateNestedManyWithoutTestInput
    studentScores?: StudentScoreCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestCreateNestedManyWithoutTestInput
    subTopic?: SubTopicCreateNestedOneWithoutTestsInput
    group?: GroupCreateNestedOneWithoutTestsInput
    folder?: FolderCreateNestedOneWithoutTestsInput
  }

  export type TestUncheckedCreateWithoutTeacherInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    adminID?: string | null
    status?: $Enums.TestStatus
    subTopicId?: string | null
    groupId?: string | null
    folderId?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutTestInput
    studentScores?: StudentScoreUncheckedCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutTeacherInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutTeacherInput, TestUncheckedCreateWithoutTeacherInput>
  }

  export type TestCreateManyTeacherInputEnvelope = {
    data: TestCreateManyTeacherInput | TestCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutTeacherInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    viewAccess?: boolean
    subject?: $Enums.Subject | null
    lastActivity?: Date | string | null
    scores?: StudentScoreCreateNestedManyWithoutStudentInput
    assignedTests?: AssignedTestCreateNestedManyWithoutStudentInput
    group?: GroupCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    viewAccess?: boolean
    subject?: $Enums.Subject | null
    lastActivity?: Date | string | null
    groupId?: string | null
    scores?: StudentScoreUncheckedCreateNestedManyWithoutStudentInput
    assignedTests?: AssignedTestUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutTeacherInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutTeacherInput, StudentUncheckedCreateWithoutTeacherInput>
  }

  export type StudentCreateManyTeacherInputEnvelope = {
    data: StudentCreateManyTeacherInput | StudentCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutTeacherInput = {
    id?: string
    title: string
    dayOfWeek: number
    hours: number
    minutes: number
    duration: number
    weeks?: number | null
    exceptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ScheduleUncheckedCreateWithoutTeacherInput = {
    id?: string
    title: string
    dayOfWeek: number
    hours: number
    minutes: number
    duration: number
    weeks?: number | null
    exceptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ScheduleCreateOrConnectWithoutTeacherInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutTeacherInput, ScheduleUncheckedCreateWithoutTeacherInput>
  }

  export type ScheduleCreateManyTeacherInputEnvelope = {
    data: ScheduleCreateManyTeacherInput | ScheduleCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutTeacherInput = {
    id?: string
    title: string
    students?: StudentCreateNestedManyWithoutGroupInput
    tests?: TestCreateNestedManyWithoutGroupInput
    assignedTests?: AssignedTestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutTeacherInput = {
    id?: string
    title: string
    students?: StudentUncheckedCreateNestedManyWithoutGroupInput
    tests?: TestUncheckedCreateNestedManyWithoutGroupInput
    assignedTests?: AssignedTestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutTeacherInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutTeacherInput, GroupUncheckedCreateWithoutTeacherInput>
  }

  export type GroupCreateManyTeacherInputEnvelope = {
    data: GroupCreateManyTeacherInput | GroupCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type FolderCreateWithoutTeacherInput = {
    id?: string
    name: string
    tests?: TestCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    tests?: TestUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderCreateOrConnectWithoutTeacherInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutTeacherInput, FolderUncheckedCreateWithoutTeacherInput>
  }

  export type FolderCreateManyTeacherInputEnvelope = {
    data: FolderCreateManyTeacherInput | FolderCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type TestUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutTeacherInput, TestUncheckedUpdateWithoutTeacherInput>
    create: XOR<TestCreateWithoutTeacherInput, TestUncheckedCreateWithoutTeacherInput>
  }

  export type TestUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutTeacherInput, TestUncheckedUpdateWithoutTeacherInput>
  }

  export type TestUpdateManyWithWhereWithoutTeacherInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutTeacherInput>
  }

  export type StudentUpsertWithWhereUniqueWithoutTeacherInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutTeacherInput, StudentUncheckedUpdateWithoutTeacherInput>
    create: XOR<StudentCreateWithoutTeacherInput, StudentUncheckedCreateWithoutTeacherInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutTeacherInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutTeacherInput, StudentUncheckedUpdateWithoutTeacherInput>
  }

  export type StudentUpdateManyWithWhereWithoutTeacherInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutTeacherInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    status?: EnumStatusFilter<"Student"> | $Enums.Status
    viewAccess?: BoolFilter<"Student"> | boolean
    subject?: EnumSubjectNullableFilter<"Student"> | $Enums.Subject | null
    lastActivity?: DateTimeNullableFilter<"Student"> | Date | string | null
    teacherId?: StringFilter<"Student"> | string
    groupId?: StringNullableFilter<"Student"> | string | null
  }

  export type ScheduleUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutTeacherInput, ScheduleUncheckedUpdateWithoutTeacherInput>
    create: XOR<ScheduleCreateWithoutTeacherInput, ScheduleUncheckedCreateWithoutTeacherInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutTeacherInput, ScheduleUncheckedUpdateWithoutTeacherInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutTeacherInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutTeacherInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: StringFilter<"Schedule"> | string
    title?: StringFilter<"Schedule"> | string
    dayOfWeek?: IntFilter<"Schedule"> | number
    hours?: IntFilter<"Schedule"> | number
    minutes?: IntFilter<"Schedule"> | number
    duration?: IntFilter<"Schedule"> | number
    weeks?: IntNullableFilter<"Schedule"> | number | null
    teacherId?: StringFilter<"Schedule"> | string
    exceptions?: JsonNullableFilter<"Schedule">
  }

  export type GroupUpsertWithWhereUniqueWithoutTeacherInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutTeacherInput, GroupUncheckedUpdateWithoutTeacherInput>
    create: XOR<GroupCreateWithoutTeacherInput, GroupUncheckedCreateWithoutTeacherInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutTeacherInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutTeacherInput, GroupUncheckedUpdateWithoutTeacherInput>
  }

  export type GroupUpdateManyWithWhereWithoutTeacherInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutTeacherInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    title?: StringFilter<"Group"> | string
    teacherId?: StringFilter<"Group"> | string
  }

  export type FolderUpsertWithWhereUniqueWithoutTeacherInput = {
    where: FolderWhereUniqueInput
    update: XOR<FolderUpdateWithoutTeacherInput, FolderUncheckedUpdateWithoutTeacherInput>
    create: XOR<FolderCreateWithoutTeacherInput, FolderUncheckedCreateWithoutTeacherInput>
  }

  export type FolderUpdateWithWhereUniqueWithoutTeacherInput = {
    where: FolderWhereUniqueInput
    data: XOR<FolderUpdateWithoutTeacherInput, FolderUncheckedUpdateWithoutTeacherInput>
  }

  export type FolderUpdateManyWithWhereWithoutTeacherInput = {
    where: FolderScalarWhereInput
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyWithoutTeacherInput>
  }

  export type FolderScalarWhereInput = {
    AND?: FolderScalarWhereInput | FolderScalarWhereInput[]
    OR?: FolderScalarWhereInput[]
    NOT?: FolderScalarWhereInput | FolderScalarWhereInput[]
    id?: StringFilter<"Folder"> | string
    name?: StringFilter<"Folder"> | string
    teacherId?: StringFilter<"Folder"> | string
  }

  export type TestCreateWithoutFolderInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    status?: $Enums.TestStatus
    teacher?: TeacherCreateNestedOneWithoutTestsInput
    admin?: AdminCreateNestedOneWithoutTestsInput
    tasks?: TaskCreateNestedManyWithoutTestInput
    studentScores?: StudentScoreCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestCreateNestedManyWithoutTestInput
    subTopic?: SubTopicCreateNestedOneWithoutTestsInput
    group?: GroupCreateNestedOneWithoutTestsInput
  }

  export type TestUncheckedCreateWithoutFolderInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    teacherId?: string | null
    adminID?: string | null
    status?: $Enums.TestStatus
    subTopicId?: string | null
    groupId?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutTestInput
    studentScores?: StudentScoreUncheckedCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutFolderInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutFolderInput, TestUncheckedCreateWithoutFolderInput>
  }

  export type TestCreateManyFolderInputEnvelope = {
    data: TestCreateManyFolderInput | TestCreateManyFolderInput[]
    skipDuplicates?: boolean
  }

  export type TeacherCreateWithoutFoldersInput = {
    id?: string
    name: string
    email: string
    isEmailVerified?: boolean
    phone: string
    password: string
    subject: $Enums.Subject
    plan?: string | null
    subscriptionTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    tests?: TestCreateNestedManyWithoutTeacherInput
    students?: StudentCreateNestedManyWithoutTeacherInput
    schedule?: ScheduleCreateNestedManyWithoutTeacherInput
    groups?: GroupCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutFoldersInput = {
    id?: string
    name: string
    email: string
    isEmailVerified?: boolean
    phone: string
    password: string
    subject: $Enums.Subject
    plan?: string | null
    subscriptionTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    tests?: TestUncheckedCreateNestedManyWithoutTeacherInput
    students?: StudentUncheckedCreateNestedManyWithoutTeacherInput
    schedule?: ScheduleUncheckedCreateNestedManyWithoutTeacherInput
    groups?: GroupUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutFoldersInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutFoldersInput, TeacherUncheckedCreateWithoutFoldersInput>
  }

  export type TestUpsertWithWhereUniqueWithoutFolderInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutFolderInput, TestUncheckedUpdateWithoutFolderInput>
    create: XOR<TestCreateWithoutFolderInput, TestUncheckedCreateWithoutFolderInput>
  }

  export type TestUpdateWithWhereUniqueWithoutFolderInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutFolderInput, TestUncheckedUpdateWithoutFolderInput>
  }

  export type TestUpdateManyWithWhereWithoutFolderInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutFolderInput>
  }

  export type TeacherUpsertWithoutFoldersInput = {
    update: XOR<TeacherUpdateWithoutFoldersInput, TeacherUncheckedUpdateWithoutFoldersInput>
    create: XOR<TeacherCreateWithoutFoldersInput, TeacherUncheckedCreateWithoutFoldersInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutFoldersInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutFoldersInput, TeacherUncheckedUpdateWithoutFoldersInput>
  }

  export type TeacherUpdateWithoutFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    tests?: TestUpdateManyWithoutTeacherNestedInput
    students?: StudentUpdateManyWithoutTeacherNestedInput
    schedule?: ScheduleUpdateManyWithoutTeacherNestedInput
    groups?: GroupUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    tests?: TestUncheckedUpdateManyWithoutTeacherNestedInput
    students?: StudentUncheckedUpdateManyWithoutTeacherNestedInput
    schedule?: ScheduleUncheckedUpdateManyWithoutTeacherNestedInput
    groups?: GroupUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type StudentScoreCreateWithoutStudentInput = {
    id?: string
    score: number
    maxScore: number
    testName?: string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    test: TestCreateNestedOneWithoutStudentScoresInput
  }

  export type StudentScoreUncheckedCreateWithoutStudentInput = {
    id?: string
    testId: string
    score: number
    maxScore: number
    testName?: string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentScoreCreateOrConnectWithoutStudentInput = {
    where: StudentScoreWhereUniqueInput
    create: XOR<StudentScoreCreateWithoutStudentInput, StudentScoreUncheckedCreateWithoutStudentInput>
  }

  export type StudentScoreCreateManyStudentInputEnvelope = {
    data: StudentScoreCreateManyStudentInput | StudentScoreCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type AssignedTestCreateWithoutStudentInput = {
    id?: string
    assignedAt?: Date | string
    endTime?: Date | string | null
    group?: GroupCreateNestedOneWithoutAssignedTestsInput
    test: TestCreateNestedOneWithoutAssignedToInput
  }

  export type AssignedTestUncheckedCreateWithoutStudentInput = {
    id?: string
    groupId?: string | null
    testId: string
    assignedAt?: Date | string
    endTime?: Date | string | null
  }

  export type AssignedTestCreateOrConnectWithoutStudentInput = {
    where: AssignedTestWhereUniqueInput
    create: XOR<AssignedTestCreateWithoutStudentInput, AssignedTestUncheckedCreateWithoutStudentInput>
  }

  export type AssignedTestCreateManyStudentInputEnvelope = {
    data: AssignedTestCreateManyStudentInput | AssignedTestCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type TeacherCreateWithoutStudentsInput = {
    id?: string
    name: string
    email: string
    isEmailVerified?: boolean
    phone: string
    password: string
    subject: $Enums.Subject
    plan?: string | null
    subscriptionTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    tests?: TestCreateNestedManyWithoutTeacherInput
    schedule?: ScheduleCreateNestedManyWithoutTeacherInput
    groups?: GroupCreateNestedManyWithoutTeacherInput
    folders?: FolderCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    email: string
    isEmailVerified?: boolean
    phone: string
    password: string
    subject: $Enums.Subject
    plan?: string | null
    subscriptionTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    tests?: TestUncheckedCreateNestedManyWithoutTeacherInput
    schedule?: ScheduleUncheckedCreateNestedManyWithoutTeacherInput
    groups?: GroupUncheckedCreateNestedManyWithoutTeacherInput
    folders?: FolderUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutStudentsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutStudentsInput, TeacherUncheckedCreateWithoutStudentsInput>
  }

  export type GroupCreateWithoutStudentsInput = {
    id?: string
    title: string
    teacher: TeacherCreateNestedOneWithoutGroupsInput
    tests?: TestCreateNestedManyWithoutGroupInput
    assignedTests?: AssignedTestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutStudentsInput = {
    id?: string
    title: string
    teacherId: string
    tests?: TestUncheckedCreateNestedManyWithoutGroupInput
    assignedTests?: AssignedTestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutStudentsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
  }

  export type StudentScoreUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentScoreWhereUniqueInput
    update: XOR<StudentScoreUpdateWithoutStudentInput, StudentScoreUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentScoreCreateWithoutStudentInput, StudentScoreUncheckedCreateWithoutStudentInput>
  }

  export type StudentScoreUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentScoreWhereUniqueInput
    data: XOR<StudentScoreUpdateWithoutStudentInput, StudentScoreUncheckedUpdateWithoutStudentInput>
  }

  export type StudentScoreUpdateManyWithWhereWithoutStudentInput = {
    where: StudentScoreScalarWhereInput
    data: XOR<StudentScoreUpdateManyMutationInput, StudentScoreUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentScoreScalarWhereInput = {
    AND?: StudentScoreScalarWhereInput | StudentScoreScalarWhereInput[]
    OR?: StudentScoreScalarWhereInput[]
    NOT?: StudentScoreScalarWhereInput | StudentScoreScalarWhereInput[]
    id?: StringFilter<"StudentScore"> | string
    studentId?: StringFilter<"StudentScore"> | string
    testId?: StringFilter<"StudentScore"> | string
    score?: IntFilter<"StudentScore"> | number
    maxScore?: IntFilter<"StudentScore"> | number
    testName?: StringFilter<"StudentScore"> | string
    studentTest?: JsonNullableFilter<"StudentScore">
    isCompleted?: BoolFilter<"StudentScore"> | boolean
    createdAt?: DateTimeFilter<"StudentScore"> | Date | string
    updatedAt?: DateTimeFilter<"StudentScore"> | Date | string
  }

  export type AssignedTestUpsertWithWhereUniqueWithoutStudentInput = {
    where: AssignedTestWhereUniqueInput
    update: XOR<AssignedTestUpdateWithoutStudentInput, AssignedTestUncheckedUpdateWithoutStudentInput>
    create: XOR<AssignedTestCreateWithoutStudentInput, AssignedTestUncheckedCreateWithoutStudentInput>
  }

  export type AssignedTestUpdateWithWhereUniqueWithoutStudentInput = {
    where: AssignedTestWhereUniqueInput
    data: XOR<AssignedTestUpdateWithoutStudentInput, AssignedTestUncheckedUpdateWithoutStudentInput>
  }

  export type AssignedTestUpdateManyWithWhereWithoutStudentInput = {
    where: AssignedTestScalarWhereInput
    data: XOR<AssignedTestUpdateManyMutationInput, AssignedTestUncheckedUpdateManyWithoutStudentInput>
  }

  export type AssignedTestScalarWhereInput = {
    AND?: AssignedTestScalarWhereInput | AssignedTestScalarWhereInput[]
    OR?: AssignedTestScalarWhereInput[]
    NOT?: AssignedTestScalarWhereInput | AssignedTestScalarWhereInput[]
    id?: StringFilter<"AssignedTest"> | string
    studentId?: StringNullableFilter<"AssignedTest"> | string | null
    groupId?: StringNullableFilter<"AssignedTest"> | string | null
    testId?: StringFilter<"AssignedTest"> | string
    assignedAt?: DateTimeFilter<"AssignedTest"> | Date | string
    endTime?: DateTimeNullableFilter<"AssignedTest"> | Date | string | null
  }

  export type TeacherUpsertWithoutStudentsInput = {
    update: XOR<TeacherUpdateWithoutStudentsInput, TeacherUncheckedUpdateWithoutStudentsInput>
    create: XOR<TeacherCreateWithoutStudentsInput, TeacherUncheckedCreateWithoutStudentsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutStudentsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutStudentsInput, TeacherUncheckedUpdateWithoutStudentsInput>
  }

  export type TeacherUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    tests?: TestUpdateManyWithoutTeacherNestedInput
    schedule?: ScheduleUpdateManyWithoutTeacherNestedInput
    groups?: GroupUpdateManyWithoutTeacherNestedInput
    folders?: FolderUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    tests?: TestUncheckedUpdateManyWithoutTeacherNestedInput
    schedule?: ScheduleUncheckedUpdateManyWithoutTeacherNestedInput
    groups?: GroupUncheckedUpdateManyWithoutTeacherNestedInput
    folders?: FolderUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type GroupUpsertWithoutStudentsInput = {
    update: XOR<GroupUpdateWithoutStudentsInput, GroupUncheckedUpdateWithoutStudentsInput>
    create: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutStudentsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutStudentsInput, GroupUncheckedUpdateWithoutStudentsInput>
  }

  export type GroupUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneRequiredWithoutGroupsNestedInput
    tests?: TestUpdateManyWithoutGroupNestedInput
    assignedTests?: AssignedTestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    tests?: TestUncheckedUpdateManyWithoutGroupNestedInput
    assignedTests?: AssignedTestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type StudentCreateWithoutScoresInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    viewAccess?: boolean
    subject?: $Enums.Subject | null
    lastActivity?: Date | string | null
    assignedTests?: AssignedTestCreateNestedManyWithoutStudentInput
    teacher: TeacherCreateNestedOneWithoutStudentsInput
    group?: GroupCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutScoresInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    viewAccess?: boolean
    subject?: $Enums.Subject | null
    lastActivity?: Date | string | null
    teacherId: string
    groupId?: string | null
    assignedTests?: AssignedTestUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutScoresInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutScoresInput, StudentUncheckedCreateWithoutScoresInput>
  }

  export type TestCreateWithoutStudentScoresInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    status?: $Enums.TestStatus
    teacher?: TeacherCreateNestedOneWithoutTestsInput
    admin?: AdminCreateNestedOneWithoutTestsInput
    tasks?: TaskCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestCreateNestedManyWithoutTestInput
    subTopic?: SubTopicCreateNestedOneWithoutTestsInput
    group?: GroupCreateNestedOneWithoutTestsInput
    folder?: FolderCreateNestedOneWithoutTestsInput
  }

  export type TestUncheckedCreateWithoutStudentScoresInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    teacherId?: string | null
    adminID?: string | null
    status?: $Enums.TestStatus
    subTopicId?: string | null
    groupId?: string | null
    folderId?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutStudentScoresInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutStudentScoresInput, TestUncheckedCreateWithoutStudentScoresInput>
  }

  export type StudentUpsertWithoutScoresInput = {
    update: XOR<StudentUpdateWithoutScoresInput, StudentUncheckedUpdateWithoutScoresInput>
    create: XOR<StudentCreateWithoutScoresInput, StudentUncheckedCreateWithoutScoresInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutScoresInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutScoresInput, StudentUncheckedUpdateWithoutScoresInput>
  }

  export type StudentUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    viewAccess?: BoolFieldUpdateOperationsInput | boolean
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedTests?: AssignedTestUpdateManyWithoutStudentNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutStudentsNestedInput
    group?: GroupUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    viewAccess?: BoolFieldUpdateOperationsInput | boolean
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTests?: AssignedTestUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TestUpsertWithoutStudentScoresInput = {
    update: XOR<TestUpdateWithoutStudentScoresInput, TestUncheckedUpdateWithoutStudentScoresInput>
    create: XOR<TestCreateWithoutStudentScoresInput, TestUncheckedCreateWithoutStudentScoresInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutStudentScoresInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutStudentScoresInput, TestUncheckedUpdateWithoutStudentScoresInput>
  }

  export type TestUpdateWithoutStudentScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    teacher?: TeacherUpdateOneWithoutTestsNestedInput
    admin?: AdminUpdateOneWithoutTestsNestedInput
    tasks?: TaskUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUpdateManyWithoutTestNestedInput
    subTopic?: SubTopicUpdateOneWithoutTestsNestedInput
    group?: GroupUpdateOneWithoutTestsNestedInput
    folder?: FolderUpdateOneWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateWithoutStudentScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    adminID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    subTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TeacherCreateWithoutTestsInput = {
    id?: string
    name: string
    email: string
    isEmailVerified?: boolean
    phone: string
    password: string
    subject: $Enums.Subject
    plan?: string | null
    subscriptionTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    students?: StudentCreateNestedManyWithoutTeacherInput
    schedule?: ScheduleCreateNestedManyWithoutTeacherInput
    groups?: GroupCreateNestedManyWithoutTeacherInput
    folders?: FolderCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutTestsInput = {
    id?: string
    name: string
    email: string
    isEmailVerified?: boolean
    phone: string
    password: string
    subject: $Enums.Subject
    plan?: string | null
    subscriptionTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    students?: StudentUncheckedCreateNestedManyWithoutTeacherInput
    schedule?: ScheduleUncheckedCreateNestedManyWithoutTeacherInput
    groups?: GroupUncheckedCreateNestedManyWithoutTeacherInput
    folders?: FolderUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutTestsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutTestsInput, TeacherUncheckedCreateWithoutTestsInput>
  }

  export type AdminCreateWithoutTestsInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: TopicCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutTestsInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: TopicUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutTestsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutTestsInput, AdminUncheckedCreateWithoutTestsInput>
  }

  export type TaskCreateWithoutTestInput = {
    id?: string
    title: string
    number: string
    image?: string | null
    type?: string | null
    isSaved?: boolean | null
    userAnsewer?: NullableJsonNullValueInput | InputJsonValue
    pairs?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUncheckedCreateWithoutTestInput = {
    id?: string
    title: string
    number: string
    image?: string | null
    type?: string | null
    isSaved?: boolean | null
    userAnsewer?: NullableJsonNullValueInput | InputJsonValue
    pairs?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutTestInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTestInput, TaskUncheckedCreateWithoutTestInput>
  }

  export type TaskCreateManyTestInputEnvelope = {
    data: TaskCreateManyTestInput | TaskCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type StudentScoreCreateWithoutTestInput = {
    id?: string
    score: number
    maxScore: number
    testName?: string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutScoresInput
  }

  export type StudentScoreUncheckedCreateWithoutTestInput = {
    id?: string
    studentId: string
    score: number
    maxScore: number
    testName?: string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentScoreCreateOrConnectWithoutTestInput = {
    where: StudentScoreWhereUniqueInput
    create: XOR<StudentScoreCreateWithoutTestInput, StudentScoreUncheckedCreateWithoutTestInput>
  }

  export type StudentScoreCreateManyTestInputEnvelope = {
    data: StudentScoreCreateManyTestInput | StudentScoreCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type AssignedTestCreateWithoutTestInput = {
    id?: string
    assignedAt?: Date | string
    endTime?: Date | string | null
    student?: StudentCreateNestedOneWithoutAssignedTestsInput
    group?: GroupCreateNestedOneWithoutAssignedTestsInput
  }

  export type AssignedTestUncheckedCreateWithoutTestInput = {
    id?: string
    studentId?: string | null
    groupId?: string | null
    assignedAt?: Date | string
    endTime?: Date | string | null
  }

  export type AssignedTestCreateOrConnectWithoutTestInput = {
    where: AssignedTestWhereUniqueInput
    create: XOR<AssignedTestCreateWithoutTestInput, AssignedTestUncheckedCreateWithoutTestInput>
  }

  export type AssignedTestCreateManyTestInputEnvelope = {
    data: AssignedTestCreateManyTestInput | AssignedTestCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type SubTopicCreateWithoutTestsInput = {
    id?: string
    name: string
    number: string
    topic: TopicCreateNestedOneWithoutSubTopicsInput
  }

  export type SubTopicUncheckedCreateWithoutTestsInput = {
    id?: string
    name: string
    number: string
    topicId: string
  }

  export type SubTopicCreateOrConnectWithoutTestsInput = {
    where: SubTopicWhereUniqueInput
    create: XOR<SubTopicCreateWithoutTestsInput, SubTopicUncheckedCreateWithoutTestsInput>
  }

  export type GroupCreateWithoutTestsInput = {
    id?: string
    title: string
    teacher: TeacherCreateNestedOneWithoutGroupsInput
    students?: StudentCreateNestedManyWithoutGroupInput
    assignedTests?: AssignedTestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutTestsInput = {
    id?: string
    title: string
    teacherId: string
    students?: StudentUncheckedCreateNestedManyWithoutGroupInput
    assignedTests?: AssignedTestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutTestsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutTestsInput, GroupUncheckedCreateWithoutTestsInput>
  }

  export type FolderCreateWithoutTestsInput = {
    id?: string
    name: string
    teacher?: TeacherCreateNestedOneWithoutFoldersInput
  }

  export type FolderUncheckedCreateWithoutTestsInput = {
    id?: string
    name: string
    teacherId: string
  }

  export type FolderCreateOrConnectWithoutTestsInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutTestsInput, FolderUncheckedCreateWithoutTestsInput>
  }

  export type TeacherUpsertWithoutTestsInput = {
    update: XOR<TeacherUpdateWithoutTestsInput, TeacherUncheckedUpdateWithoutTestsInput>
    create: XOR<TeacherCreateWithoutTestsInput, TeacherUncheckedCreateWithoutTestsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutTestsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutTestsInput, TeacherUncheckedUpdateWithoutTestsInput>
  }

  export type TeacherUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    students?: StudentUpdateManyWithoutTeacherNestedInput
    schedule?: ScheduleUpdateManyWithoutTeacherNestedInput
    groups?: GroupUpdateManyWithoutTeacherNestedInput
    folders?: FolderUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    students?: StudentUncheckedUpdateManyWithoutTeacherNestedInput
    schedule?: ScheduleUncheckedUpdateManyWithoutTeacherNestedInput
    groups?: GroupUncheckedUpdateManyWithoutTeacherNestedInput
    folders?: FolderUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type AdminUpsertWithoutTestsInput = {
    update: XOR<AdminUpdateWithoutTestsInput, AdminUncheckedUpdateWithoutTestsInput>
    create: XOR<AdminCreateWithoutTestsInput, AdminUncheckedCreateWithoutTestsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutTestsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutTestsInput, AdminUncheckedUpdateWithoutTestsInput>
  }

  export type AdminUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutTestInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutTestInput, TaskUncheckedUpdateWithoutTestInput>
    create: XOR<TaskCreateWithoutTestInput, TaskUncheckedCreateWithoutTestInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutTestInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutTestInput, TaskUncheckedUpdateWithoutTestInput>
  }

  export type TaskUpdateManyWithWhereWithoutTestInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTestInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    number?: StringFilter<"Task"> | string
    image?: StringNullableFilter<"Task"> | string | null
    type?: StringNullableFilter<"Task"> | string | null
    isSaved?: BoolNullableFilter<"Task"> | boolean | null
    userAnsewer?: JsonNullableFilter<"Task">
    pairs?: JsonNullableFilter<"Task">
    answers?: JsonNullableFilter<"Task">
    testId?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type StudentScoreUpsertWithWhereUniqueWithoutTestInput = {
    where: StudentScoreWhereUniqueInput
    update: XOR<StudentScoreUpdateWithoutTestInput, StudentScoreUncheckedUpdateWithoutTestInput>
    create: XOR<StudentScoreCreateWithoutTestInput, StudentScoreUncheckedCreateWithoutTestInput>
  }

  export type StudentScoreUpdateWithWhereUniqueWithoutTestInput = {
    where: StudentScoreWhereUniqueInput
    data: XOR<StudentScoreUpdateWithoutTestInput, StudentScoreUncheckedUpdateWithoutTestInput>
  }

  export type StudentScoreUpdateManyWithWhereWithoutTestInput = {
    where: StudentScoreScalarWhereInput
    data: XOR<StudentScoreUpdateManyMutationInput, StudentScoreUncheckedUpdateManyWithoutTestInput>
  }

  export type AssignedTestUpsertWithWhereUniqueWithoutTestInput = {
    where: AssignedTestWhereUniqueInput
    update: XOR<AssignedTestUpdateWithoutTestInput, AssignedTestUncheckedUpdateWithoutTestInput>
    create: XOR<AssignedTestCreateWithoutTestInput, AssignedTestUncheckedCreateWithoutTestInput>
  }

  export type AssignedTestUpdateWithWhereUniqueWithoutTestInput = {
    where: AssignedTestWhereUniqueInput
    data: XOR<AssignedTestUpdateWithoutTestInput, AssignedTestUncheckedUpdateWithoutTestInput>
  }

  export type AssignedTestUpdateManyWithWhereWithoutTestInput = {
    where: AssignedTestScalarWhereInput
    data: XOR<AssignedTestUpdateManyMutationInput, AssignedTestUncheckedUpdateManyWithoutTestInput>
  }

  export type SubTopicUpsertWithoutTestsInput = {
    update: XOR<SubTopicUpdateWithoutTestsInput, SubTopicUncheckedUpdateWithoutTestsInput>
    create: XOR<SubTopicCreateWithoutTestsInput, SubTopicUncheckedCreateWithoutTestsInput>
    where?: SubTopicWhereInput
  }

  export type SubTopicUpdateToOneWithWhereWithoutTestsInput = {
    where?: SubTopicWhereInput
    data: XOR<SubTopicUpdateWithoutTestsInput, SubTopicUncheckedUpdateWithoutTestsInput>
  }

  export type SubTopicUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    topic?: TopicUpdateOneRequiredWithoutSubTopicsNestedInput
  }

  export type SubTopicUncheckedUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupUpsertWithoutTestsInput = {
    update: XOR<GroupUpdateWithoutTestsInput, GroupUncheckedUpdateWithoutTestsInput>
    create: XOR<GroupCreateWithoutTestsInput, GroupUncheckedCreateWithoutTestsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutTestsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutTestsInput, GroupUncheckedUpdateWithoutTestsInput>
  }

  export type GroupUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneRequiredWithoutGroupsNestedInput
    students?: StudentUpdateManyWithoutGroupNestedInput
    assignedTests?: AssignedTestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    students?: StudentUncheckedUpdateManyWithoutGroupNestedInput
    assignedTests?: AssignedTestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type FolderUpsertWithoutTestsInput = {
    update: XOR<FolderUpdateWithoutTestsInput, FolderUncheckedUpdateWithoutTestsInput>
    create: XOR<FolderCreateWithoutTestsInput, FolderUncheckedCreateWithoutTestsInput>
    where?: FolderWhereInput
  }

  export type FolderUpdateToOneWithWhereWithoutTestsInput = {
    where?: FolderWhereInput
    data: XOR<FolderUpdateWithoutTestsInput, FolderUncheckedUpdateWithoutTestsInput>
  }

  export type FolderUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneWithoutFoldersNestedInput
  }

  export type FolderUncheckedUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateWithoutAssignedTestsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    viewAccess?: boolean
    subject?: $Enums.Subject | null
    lastActivity?: Date | string | null
    scores?: StudentScoreCreateNestedManyWithoutStudentInput
    teacher: TeacherCreateNestedOneWithoutStudentsInput
    group?: GroupCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutAssignedTestsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    viewAccess?: boolean
    subject?: $Enums.Subject | null
    lastActivity?: Date | string | null
    teacherId: string
    groupId?: string | null
    scores?: StudentScoreUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAssignedTestsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAssignedTestsInput, StudentUncheckedCreateWithoutAssignedTestsInput>
  }

  export type GroupCreateWithoutAssignedTestsInput = {
    id?: string
    title: string
    teacher: TeacherCreateNestedOneWithoutGroupsInput
    students?: StudentCreateNestedManyWithoutGroupInput
    tests?: TestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutAssignedTestsInput = {
    id?: string
    title: string
    teacherId: string
    students?: StudentUncheckedCreateNestedManyWithoutGroupInput
    tests?: TestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutAssignedTestsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutAssignedTestsInput, GroupUncheckedCreateWithoutAssignedTestsInput>
  }

  export type TestCreateWithoutAssignedToInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    status?: $Enums.TestStatus
    teacher?: TeacherCreateNestedOneWithoutTestsInput
    admin?: AdminCreateNestedOneWithoutTestsInput
    tasks?: TaskCreateNestedManyWithoutTestInput
    studentScores?: StudentScoreCreateNestedManyWithoutTestInput
    subTopic?: SubTopicCreateNestedOneWithoutTestsInput
    group?: GroupCreateNestedOneWithoutTestsInput
    folder?: FolderCreateNestedOneWithoutTestsInput
  }

  export type TestUncheckedCreateWithoutAssignedToInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    teacherId?: string | null
    adminID?: string | null
    status?: $Enums.TestStatus
    subTopicId?: string | null
    groupId?: string | null
    folderId?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutTestInput
    studentScores?: StudentScoreUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutAssignedToInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutAssignedToInput, TestUncheckedCreateWithoutAssignedToInput>
  }

  export type StudentUpsertWithoutAssignedTestsInput = {
    update: XOR<StudentUpdateWithoutAssignedTestsInput, StudentUncheckedUpdateWithoutAssignedTestsInput>
    create: XOR<StudentCreateWithoutAssignedTestsInput, StudentUncheckedCreateWithoutAssignedTestsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAssignedTestsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAssignedTestsInput, StudentUncheckedUpdateWithoutAssignedTestsInput>
  }

  export type StudentUpdateWithoutAssignedTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    viewAccess?: BoolFieldUpdateOperationsInput | boolean
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scores?: StudentScoreUpdateManyWithoutStudentNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutStudentsNestedInput
    group?: GroupUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutAssignedTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    viewAccess?: BoolFieldUpdateOperationsInput | boolean
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    scores?: StudentScoreUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type GroupUpsertWithoutAssignedTestsInput = {
    update: XOR<GroupUpdateWithoutAssignedTestsInput, GroupUncheckedUpdateWithoutAssignedTestsInput>
    create: XOR<GroupCreateWithoutAssignedTestsInput, GroupUncheckedCreateWithoutAssignedTestsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutAssignedTestsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutAssignedTestsInput, GroupUncheckedUpdateWithoutAssignedTestsInput>
  }

  export type GroupUpdateWithoutAssignedTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneRequiredWithoutGroupsNestedInput
    students?: StudentUpdateManyWithoutGroupNestedInput
    tests?: TestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutAssignedTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    students?: StudentUncheckedUpdateManyWithoutGroupNestedInput
    tests?: TestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type TestUpsertWithoutAssignedToInput = {
    update: XOR<TestUpdateWithoutAssignedToInput, TestUncheckedUpdateWithoutAssignedToInput>
    create: XOR<TestCreateWithoutAssignedToInput, TestUncheckedCreateWithoutAssignedToInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutAssignedToInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutAssignedToInput, TestUncheckedUpdateWithoutAssignedToInput>
  }

  export type TestUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    teacher?: TeacherUpdateOneWithoutTestsNestedInput
    admin?: AdminUpdateOneWithoutTestsNestedInput
    tasks?: TaskUpdateManyWithoutTestNestedInput
    studentScores?: StudentScoreUpdateManyWithoutTestNestedInput
    subTopic?: SubTopicUpdateOneWithoutTestsNestedInput
    group?: GroupUpdateOneWithoutTestsNestedInput
    folder?: FolderUpdateOneWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    adminID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    subTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutTestNestedInput
    studentScores?: StudentScoreUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestCreateWithoutTasksInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    status?: $Enums.TestStatus
    teacher?: TeacherCreateNestedOneWithoutTestsInput
    admin?: AdminCreateNestedOneWithoutTestsInput
    studentScores?: StudentScoreCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestCreateNestedManyWithoutTestInput
    subTopic?: SubTopicCreateNestedOneWithoutTestsInput
    group?: GroupCreateNestedOneWithoutTestsInput
    folder?: FolderCreateNestedOneWithoutTestsInput
  }

  export type TestUncheckedCreateWithoutTasksInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    teacherId?: string | null
    adminID?: string | null
    status?: $Enums.TestStatus
    subTopicId?: string | null
    groupId?: string | null
    folderId?: string | null
    studentScores?: StudentScoreUncheckedCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutTasksInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutTasksInput, TestUncheckedCreateWithoutTasksInput>
  }

  export type TestUpsertWithoutTasksInput = {
    update: XOR<TestUpdateWithoutTasksInput, TestUncheckedUpdateWithoutTasksInput>
    create: XOR<TestCreateWithoutTasksInput, TestUncheckedCreateWithoutTasksInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutTasksInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutTasksInput, TestUncheckedUpdateWithoutTasksInput>
  }

  export type TestUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    teacher?: TeacherUpdateOneWithoutTestsNestedInput
    admin?: AdminUpdateOneWithoutTestsNestedInput
    studentScores?: StudentScoreUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUpdateManyWithoutTestNestedInput
    subTopic?: SubTopicUpdateOneWithoutTestsNestedInput
    group?: GroupUpdateOneWithoutTestsNestedInput
    folder?: FolderUpdateOneWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    adminID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    subTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    studentScores?: StudentScoreUncheckedUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TeacherCreateWithoutScheduleInput = {
    id?: string
    name: string
    email: string
    isEmailVerified?: boolean
    phone: string
    password: string
    subject: $Enums.Subject
    plan?: string | null
    subscriptionTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    tests?: TestCreateNestedManyWithoutTeacherInput
    students?: StudentCreateNestedManyWithoutTeacherInput
    groups?: GroupCreateNestedManyWithoutTeacherInput
    folders?: FolderCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutScheduleInput = {
    id?: string
    name: string
    email: string
    isEmailVerified?: boolean
    phone: string
    password: string
    subject: $Enums.Subject
    plan?: string | null
    subscriptionTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    tests?: TestUncheckedCreateNestedManyWithoutTeacherInput
    students?: StudentUncheckedCreateNestedManyWithoutTeacherInput
    groups?: GroupUncheckedCreateNestedManyWithoutTeacherInput
    folders?: FolderUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutScheduleInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutScheduleInput, TeacherUncheckedCreateWithoutScheduleInput>
  }

  export type TeacherUpsertWithoutScheduleInput = {
    update: XOR<TeacherUpdateWithoutScheduleInput, TeacherUncheckedUpdateWithoutScheduleInput>
    create: XOR<TeacherCreateWithoutScheduleInput, TeacherUncheckedCreateWithoutScheduleInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutScheduleInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutScheduleInput, TeacherUncheckedUpdateWithoutScheduleInput>
  }

  export type TeacherUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    tests?: TestUpdateManyWithoutTeacherNestedInput
    students?: StudentUpdateManyWithoutTeacherNestedInput
    groups?: GroupUpdateManyWithoutTeacherNestedInput
    folders?: FolderUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    tests?: TestUncheckedUpdateManyWithoutTeacherNestedInput
    students?: StudentUncheckedUpdateManyWithoutTeacherNestedInput
    groups?: GroupUncheckedUpdateManyWithoutTeacherNestedInput
    folders?: FolderUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateWithoutGroupsInput = {
    id?: string
    name: string
    email: string
    isEmailVerified?: boolean
    phone: string
    password: string
    subject: $Enums.Subject
    plan?: string | null
    subscriptionTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    tests?: TestCreateNestedManyWithoutTeacherInput
    students?: StudentCreateNestedManyWithoutTeacherInput
    schedule?: ScheduleCreateNestedManyWithoutTeacherInput
    folders?: FolderCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    email: string
    isEmailVerified?: boolean
    phone: string
    password: string
    subject: $Enums.Subject
    plan?: string | null
    subscriptionTime?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    tests?: TestUncheckedCreateNestedManyWithoutTeacherInput
    students?: StudentUncheckedCreateNestedManyWithoutTeacherInput
    schedule?: ScheduleUncheckedCreateNestedManyWithoutTeacherInput
    folders?: FolderUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutGroupsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutGroupsInput, TeacherUncheckedCreateWithoutGroupsInput>
  }

  export type StudentCreateWithoutGroupInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    viewAccess?: boolean
    subject?: $Enums.Subject | null
    lastActivity?: Date | string | null
    scores?: StudentScoreCreateNestedManyWithoutStudentInput
    assignedTests?: AssignedTestCreateNestedManyWithoutStudentInput
    teacher: TeacherCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutGroupInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    viewAccess?: boolean
    subject?: $Enums.Subject | null
    lastActivity?: Date | string | null
    teacherId: string
    scores?: StudentScoreUncheckedCreateNestedManyWithoutStudentInput
    assignedTests?: AssignedTestUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutGroupInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput>
  }

  export type StudentCreateManyGroupInputEnvelope = {
    data: StudentCreateManyGroupInput | StudentCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type TestCreateWithoutGroupInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    status?: $Enums.TestStatus
    teacher?: TeacherCreateNestedOneWithoutTestsInput
    admin?: AdminCreateNestedOneWithoutTestsInput
    tasks?: TaskCreateNestedManyWithoutTestInput
    studentScores?: StudentScoreCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestCreateNestedManyWithoutTestInput
    subTopic?: SubTopicCreateNestedOneWithoutTestsInput
    folder?: FolderCreateNestedOneWithoutTestsInput
  }

  export type TestUncheckedCreateWithoutGroupInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    teacherId?: string | null
    adminID?: string | null
    status?: $Enums.TestStatus
    subTopicId?: string | null
    folderId?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutTestInput
    studentScores?: StudentScoreUncheckedCreateNestedManyWithoutTestInput
    assignedTo?: AssignedTestUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutGroupInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutGroupInput, TestUncheckedCreateWithoutGroupInput>
  }

  export type TestCreateManyGroupInputEnvelope = {
    data: TestCreateManyGroupInput | TestCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type AssignedTestCreateWithoutGroupInput = {
    id?: string
    assignedAt?: Date | string
    endTime?: Date | string | null
    student?: StudentCreateNestedOneWithoutAssignedTestsInput
    test: TestCreateNestedOneWithoutAssignedToInput
  }

  export type AssignedTestUncheckedCreateWithoutGroupInput = {
    id?: string
    studentId?: string | null
    testId: string
    assignedAt?: Date | string
    endTime?: Date | string | null
  }

  export type AssignedTestCreateOrConnectWithoutGroupInput = {
    where: AssignedTestWhereUniqueInput
    create: XOR<AssignedTestCreateWithoutGroupInput, AssignedTestUncheckedCreateWithoutGroupInput>
  }

  export type AssignedTestCreateManyGroupInputEnvelope = {
    data: AssignedTestCreateManyGroupInput | AssignedTestCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type TeacherUpsertWithoutGroupsInput = {
    update: XOR<TeacherUpdateWithoutGroupsInput, TeacherUncheckedUpdateWithoutGroupsInput>
    create: XOR<TeacherCreateWithoutGroupsInput, TeacherUncheckedCreateWithoutGroupsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutGroupsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutGroupsInput, TeacherUncheckedUpdateWithoutGroupsInput>
  }

  export type TeacherUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    tests?: TestUpdateManyWithoutTeacherNestedInput
    students?: StudentUpdateManyWithoutTeacherNestedInput
    schedule?: ScheduleUpdateManyWithoutTeacherNestedInput
    folders?: FolderUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    tests?: TestUncheckedUpdateManyWithoutTeacherNestedInput
    students?: StudentUncheckedUpdateManyWithoutTeacherNestedInput
    schedule?: ScheduleUncheckedUpdateManyWithoutTeacherNestedInput
    folders?: FolderUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type StudentUpsertWithWhereUniqueWithoutGroupInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutGroupInput, StudentUncheckedUpdateWithoutGroupInput>
    create: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutGroupInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutGroupInput, StudentUncheckedUpdateWithoutGroupInput>
  }

  export type StudentUpdateManyWithWhereWithoutGroupInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutGroupInput>
  }

  export type TestUpsertWithWhereUniqueWithoutGroupInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutGroupInput, TestUncheckedUpdateWithoutGroupInput>
    create: XOR<TestCreateWithoutGroupInput, TestUncheckedCreateWithoutGroupInput>
  }

  export type TestUpdateWithWhereUniqueWithoutGroupInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutGroupInput, TestUncheckedUpdateWithoutGroupInput>
  }

  export type TestUpdateManyWithWhereWithoutGroupInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutGroupInput>
  }

  export type AssignedTestUpsertWithWhereUniqueWithoutGroupInput = {
    where: AssignedTestWhereUniqueInput
    update: XOR<AssignedTestUpdateWithoutGroupInput, AssignedTestUncheckedUpdateWithoutGroupInput>
    create: XOR<AssignedTestCreateWithoutGroupInput, AssignedTestUncheckedCreateWithoutGroupInput>
  }

  export type AssignedTestUpdateWithWhereUniqueWithoutGroupInput = {
    where: AssignedTestWhereUniqueInput
    data: XOR<AssignedTestUpdateWithoutGroupInput, AssignedTestUncheckedUpdateWithoutGroupInput>
  }

  export type AssignedTestUpdateManyWithWhereWithoutGroupInput = {
    where: AssignedTestScalarWhereInput
    data: XOR<AssignedTestUpdateManyMutationInput, AssignedTestUncheckedUpdateManyWithoutGroupInput>
  }

  export type TopicCreateManyAdminInput = {
    id?: string
    subjectType: string
    name: string
    number: string
    createdAt?: Date | string
  }

  export type TestCreateManyAdminInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    teacherId?: string | null
    status?: $Enums.TestStatus
    subTopicId?: string | null
    groupId?: string | null
    folderId?: string | null
  }

  export type TopicUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTopics?: SubTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTopics?: SubTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectType?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    teacher?: TeacherUpdateOneWithoutTestsNestedInput
    tasks?: TaskUpdateManyWithoutTestNestedInput
    studentScores?: StudentScoreUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUpdateManyWithoutTestNestedInput
    subTopic?: SubTopicUpdateOneWithoutTestsNestedInput
    group?: GroupUpdateOneWithoutTestsNestedInput
    folder?: FolderUpdateOneWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    subTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutTestNestedInput
    studentScores?: StudentScoreUncheckedUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    subTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubTopicCreateManyTopicInput = {
    id?: string
    name: string
    number: string
  }

  export type SubTopicUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    tests?: TestUpdateManyWithoutSubTopicNestedInput
  }

  export type SubTopicUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    tests?: TestUncheckedUpdateManyWithoutSubTopicNestedInput
  }

  export type SubTopicUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
  }

  export type TestCreateManySubTopicInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    teacherId?: string | null
    adminID?: string | null
    status?: $Enums.TestStatus
    groupId?: string | null
    folderId?: string | null
  }

  export type TestUpdateWithoutSubTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    teacher?: TeacherUpdateOneWithoutTestsNestedInput
    admin?: AdminUpdateOneWithoutTestsNestedInput
    tasks?: TaskUpdateManyWithoutTestNestedInput
    studentScores?: StudentScoreUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUpdateManyWithoutTestNestedInput
    group?: GroupUpdateOneWithoutTestsNestedInput
    folder?: FolderUpdateOneWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateWithoutSubTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    adminID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutTestNestedInput
    studentScores?: StudentScoreUncheckedUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateManyWithoutSubTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    adminID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestCreateManyTeacherInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    adminID?: string | null
    status?: $Enums.TestStatus
    subTopicId?: string | null
    groupId?: string | null
    folderId?: string | null
  }

  export type StudentCreateManyTeacherInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    viewAccess?: boolean
    subject?: $Enums.Subject | null
    lastActivity?: Date | string | null
    groupId?: string | null
  }

  export type ScheduleCreateManyTeacherInput = {
    id?: string
    title: string
    dayOfWeek: number
    hours: number
    minutes: number
    duration: number
    weeks?: number | null
    exceptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GroupCreateManyTeacherInput = {
    id?: string
    title: string
  }

  export type FolderCreateManyTeacherInput = {
    id?: string
    name: string
  }

  export type TestUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    admin?: AdminUpdateOneWithoutTestsNestedInput
    tasks?: TaskUpdateManyWithoutTestNestedInput
    studentScores?: StudentScoreUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUpdateManyWithoutTestNestedInput
    subTopic?: SubTopicUpdateOneWithoutTestsNestedInput
    group?: GroupUpdateOneWithoutTestsNestedInput
    folder?: FolderUpdateOneWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    adminID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    subTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutTestNestedInput
    studentScores?: StudentScoreUncheckedUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    adminID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    subTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    viewAccess?: BoolFieldUpdateOperationsInput | boolean
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scores?: StudentScoreUpdateManyWithoutStudentNestedInput
    assignedTests?: AssignedTestUpdateManyWithoutStudentNestedInput
    group?: GroupUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    viewAccess?: BoolFieldUpdateOperationsInput | boolean
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    scores?: StudentScoreUncheckedUpdateManyWithoutStudentNestedInput
    assignedTests?: AssignedTestUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    viewAccess?: BoolFieldUpdateOperationsInput | boolean
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScheduleUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    minutes?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    weeks?: NullableIntFieldUpdateOperationsInput | number | null
    exceptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ScheduleUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    minutes?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    weeks?: NullableIntFieldUpdateOperationsInput | number | null
    exceptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ScheduleUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    minutes?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    weeks?: NullableIntFieldUpdateOperationsInput | number | null
    exceptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GroupUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    students?: StudentUpdateManyWithoutGroupNestedInput
    tests?: TestUpdateManyWithoutGroupNestedInput
    assignedTests?: AssignedTestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    students?: StudentUncheckedUpdateManyWithoutGroupNestedInput
    tests?: TestUncheckedUpdateManyWithoutGroupNestedInput
    assignedTests?: AssignedTestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type FolderUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tests?: TestUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tests?: TestUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TestCreateManyFolderInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    teacherId?: string | null
    adminID?: string | null
    status?: $Enums.TestStatus
    subTopicId?: string | null
    groupId?: string | null
  }

  export type TestUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    teacher?: TeacherUpdateOneWithoutTestsNestedInput
    admin?: AdminUpdateOneWithoutTestsNestedInput
    tasks?: TaskUpdateManyWithoutTestNestedInput
    studentScores?: StudentScoreUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUpdateManyWithoutTestNestedInput
    subTopic?: SubTopicUpdateOneWithoutTestsNestedInput
    group?: GroupUpdateOneWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    adminID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    subTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutTestNestedInput
    studentScores?: StudentScoreUncheckedUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateManyWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    adminID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    subTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentScoreCreateManyStudentInput = {
    id?: string
    testId: string
    score: number
    maxScore: number
    testName?: string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignedTestCreateManyStudentInput = {
    id?: string
    groupId?: string | null
    testId: string
    assignedAt?: Date | string
    endTime?: Date | string | null
  }

  export type StudentScoreUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutStudentScoresNestedInput
  }

  export type StudentScoreUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentScoreUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignedTestUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneWithoutAssignedTestsNestedInput
    test?: TestUpdateOneRequiredWithoutAssignedToNestedInput
  }

  export type AssignedTestUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    testId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssignedTestUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    testId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCreateManyTestInput = {
    id?: string
    title: string
    number: string
    image?: string | null
    type?: string | null
    isSaved?: boolean | null
    userAnsewer?: NullableJsonNullValueInput | InputJsonValue
    pairs?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentScoreCreateManyTestInput = {
    id?: string
    studentId: string
    score: number
    maxScore: number
    testName?: string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignedTestCreateManyTestInput = {
    id?: string
    studentId?: string | null
    groupId?: string | null
    assignedAt?: Date | string
    endTime?: Date | string | null
  }

  export type TaskUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    isSaved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAnsewer?: NullableJsonNullValueInput | InputJsonValue
    pairs?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    isSaved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAnsewer?: NullableJsonNullValueInput | InputJsonValue
    pairs?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    isSaved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userAnsewer?: NullableJsonNullValueInput | InputJsonValue
    pairs?: NullableJsonNullValueInput | InputJsonValue
    answers?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentScoreUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutScoresNestedInput
  }

  export type StudentScoreUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentScoreUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    studentTest?: NullableJsonNullValueInput | InputJsonValue
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignedTestUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneWithoutAssignedTestsNestedInput
    group?: GroupUpdateOneWithoutAssignedTestsNestedInput
  }

  export type AssignedTestUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssignedTestUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentCreateManyGroupInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    viewAccess?: boolean
    subject?: $Enums.Subject | null
    lastActivity?: Date | string | null
    teacherId: string
  }

  export type TestCreateManyGroupInput = {
    id?: string
    title?: string | null
    timeLimit?: number | null
    description?: string | null
    score?: string | null
    startTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testTYpe?: string | null
    testTheme?: string | null
    teacherId?: string | null
    adminID?: string | null
    status?: $Enums.TestStatus
    subTopicId?: string | null
    folderId?: string | null
  }

  export type AssignedTestCreateManyGroupInput = {
    id?: string
    studentId?: string | null
    testId: string
    assignedAt?: Date | string
    endTime?: Date | string | null
  }

  export type StudentUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    viewAccess?: BoolFieldUpdateOperationsInput | boolean
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scores?: StudentScoreUpdateManyWithoutStudentNestedInput
    assignedTests?: AssignedTestUpdateManyWithoutStudentNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    viewAccess?: BoolFieldUpdateOperationsInput | boolean
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    scores?: StudentScoreUncheckedUpdateManyWithoutStudentNestedInput
    assignedTests?: AssignedTestUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    viewAccess?: BoolFieldUpdateOperationsInput | boolean
    subject?: NullableEnumSubjectFieldUpdateOperationsInput | $Enums.Subject | null
    lastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type TestUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    teacher?: TeacherUpdateOneWithoutTestsNestedInput
    admin?: AdminUpdateOneWithoutTestsNestedInput
    tasks?: TaskUpdateManyWithoutTestNestedInput
    studentScores?: StudentScoreUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUpdateManyWithoutTestNestedInput
    subTopic?: SubTopicUpdateOneWithoutTestsNestedInput
    folder?: FolderUpdateOneWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    adminID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    subTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutTestNestedInput
    studentScores?: StudentScoreUncheckedUpdateManyWithoutTestNestedInput
    assignedTo?: AssignedTestUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testTYpe?: NullableStringFieldUpdateOperationsInput | string | null
    testTheme?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    adminID?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus
    subTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignedTestUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneWithoutAssignedTestsNestedInput
    test?: TestUpdateOneRequiredWithoutAssignedToNestedInput
  }

  export type AssignedTestUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    testId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssignedTestUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    testId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}