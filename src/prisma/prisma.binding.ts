import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    profiles: <T = Array<Profile | null>>(args: { where?: ProfileWhereInput | null, orderBy?: ProfileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locations: <T = Array<Location | null>>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    doctors: <T = Array<Doctor | null>>(args: { where?: DoctorWhereInput | null, orderBy?: DoctorOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    appointments: <T = Array<Appointment | null>>(args: { where?: AppointmentWhereInput | null, orderBy?: AppointmentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    hospitals: <T = Array<Hospital | null>>(args: { where?: HospitalWhereInput | null, orderBy?: HospitalOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    attendings: <T = Array<Attending | null>>(args: { where?: AttendingWhereInput | null, orderBy?: AttendingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chambers: <T = Array<Chamber | null>>(args: { where?: ChamberWhereInput | null, orderBy?: ChamberOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    verificationCodes: <T = Array<VerificationCode | null>>(args: { where?: VerificationCodeWhereInput | null, orderBy?: VerificationCodeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    profile: <T = Profile | null>(args: { where: ProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    doctor: <T = Doctor | null>(args: { where: DoctorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    appointment: <T = Appointment | null>(args: { where: AppointmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    hospital: <T = Hospital | null>(args: { where: HospitalWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    attending: <T = Attending | null>(args: { where: AttendingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    chamber: <T = Chamber | null>(args: { where: ChamberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    verificationCode: <T = VerificationCode | null>(args: { where: VerificationCodeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    profilesConnection: <T = ProfileConnection>(args: { where?: ProfileWhereInput | null, orderBy?: ProfileOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    doctorsConnection: <T = DoctorConnection>(args: { where?: DoctorWhereInput | null, orderBy?: DoctorOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    appointmentsConnection: <T = AppointmentConnection>(args: { where?: AppointmentWhereInput | null, orderBy?: AppointmentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    hospitalsConnection: <T = HospitalConnection>(args: { where?: HospitalWhereInput | null, orderBy?: HospitalOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    attendingsConnection: <T = AttendingConnection>(args: { where?: AttendingWhereInput | null, orderBy?: AttendingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    chambersConnection: <T = ChamberConnection>(args: { where?: ChamberWhereInput | null, orderBy?: ChamberOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    verificationCodesConnection: <T = VerificationCodeConnection>(args: { where?: VerificationCodeWhereInput | null, orderBy?: VerificationCodeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProfile: <T = Profile>(args: { data: ProfileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDoctor: <T = Doctor>(args: { data: DoctorCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAppointment: <T = Appointment>(args: { data: AppointmentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createHospital: <T = Hospital>(args: { data: HospitalCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAttending: <T = Attending>(args: { data: AttendingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createChamber: <T = Chamber>(args: { data: ChamberCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createVerificationCode: <T = VerificationCode>(args: { data: VerificationCodeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateProfile: <T = Profile | null>(args: { data: ProfileUpdateInput, where: ProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateLocation: <T = Location | null>(args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateDoctor: <T = Doctor | null>(args: { data: DoctorUpdateInput, where: DoctorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateAppointment: <T = Appointment | null>(args: { data: AppointmentUpdateInput, where: AppointmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateHospital: <T = Hospital | null>(args: { data: HospitalUpdateInput, where: HospitalWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateAttending: <T = Attending | null>(args: { data: AttendingUpdateInput, where: AttendingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateChamber: <T = Chamber | null>(args: { data: ChamberUpdateInput, where: ChamberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateVerificationCode: <T = VerificationCode | null>(args: { data: VerificationCodeUpdateInput, where: VerificationCodeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteProfile: <T = Profile | null>(args: { where: ProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLocation: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteDoctor: <T = Doctor | null>(args: { where: DoctorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteAppointment: <T = Appointment | null>(args: { where: AppointmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteHospital: <T = Hospital | null>(args: { where: HospitalWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteAttending: <T = Attending | null>(args: { where: AttendingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteChamber: <T = Chamber | null>(args: { where: ChamberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteVerificationCode: <T = VerificationCode | null>(args: { where: VerificationCodeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProfile: <T = Profile>(args: { where: ProfileWhereUniqueInput, create: ProfileCreateInput, update: ProfileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocation: <T = Location>(args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDoctor: <T = Doctor>(args: { where: DoctorWhereUniqueInput, create: DoctorCreateInput, update: DoctorUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAppointment: <T = Appointment>(args: { where: AppointmentWhereUniqueInput, create: AppointmentCreateInput, update: AppointmentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertHospital: <T = Hospital>(args: { where: HospitalWhereUniqueInput, create: HospitalCreateInput, update: HospitalUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAttending: <T = Attending>(args: { where: AttendingWhereUniqueInput, create: AttendingCreateInput, update: AttendingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertChamber: <T = Chamber>(args: { where: ChamberWhereUniqueInput, create: ChamberCreateInput, update: ChamberUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertVerificationCode: <T = VerificationCode>(args: { where: VerificationCodeWhereUniqueInput, create: VerificationCodeCreateInput, update: VerificationCodeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProfiles: <T = BatchPayload>(args: { data: ProfileUpdateManyMutationInput, where?: ProfileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateManyMutationInput, where?: LocationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDoctors: <T = BatchPayload>(args: { data: DoctorUpdateManyMutationInput, where?: DoctorWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAppointments: <T = BatchPayload>(args: { data: AppointmentUpdateManyMutationInput, where?: AppointmentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyHospitals: <T = BatchPayload>(args: { data: HospitalUpdateManyMutationInput, where?: HospitalWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyChambers: <T = BatchPayload>(args: { data: ChamberUpdateManyMutationInput, where?: ChamberWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyVerificationCodes: <T = BatchPayload>(args: { data: VerificationCodeUpdateManyMutationInput, where?: VerificationCodeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProfiles: <T = BatchPayload>(args: { where?: ProfileWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDoctors: <T = BatchPayload>(args: { where?: DoctorWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAppointments: <T = BatchPayload>(args: { where?: AppointmentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyHospitals: <T = BatchPayload>(args: { where?: HospitalWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAttendings: <T = BatchPayload>(args: { where?: AttendingWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyChambers: <T = BatchPayload>(args: { where?: ChamberWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyVerificationCodes: <T = BatchPayload>(args: { where?: VerificationCodeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    executeRaw: <T = Json>(args: { database?: PrismaDatabase | null, query: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    profile: <T = ProfileSubscriptionPayload | null>(args: { where?: ProfileSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    doctor: <T = DoctorSubscriptionPayload | null>(args: { where?: DoctorSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    appointment: <T = AppointmentSubscriptionPayload | null>(args: { where?: AppointmentSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    hospital: <T = HospitalSubscriptionPayload | null>(args: { where?: HospitalSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    attending: <T = AttendingSubscriptionPayload | null>(args: { where?: AttendingSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    chamber: <T = ChamberSubscriptionPayload | null>(args: { where?: ChamberSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    verificationCode: <T = VerificationCodeSubscriptionPayload | null>(args: { where?: VerificationCodeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Profile: (where?: ProfileWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  Doctor: (where?: DoctorWhereInput) => Promise<boolean>
  Appointment: (where?: AppointmentWhereInput) => Promise<boolean>
  Hospital: (where?: HospitalWhereInput) => Promise<boolean>
  Attending: (where?: AttendingWhereInput) => Promise<boolean>
  Chamber: (where?: ChamberWhereInput) => Promise<boolean>
  VerificationCode: (where?: VerificationCodeWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateAppointment {
  count: Int!
}

type AggregateAttending {
  count: Int!
}

type AggregateChamber {
  count: Int!
}

type AggregateDoctor {
  count: Int!
}

type AggregateHospital {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateProfile {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVerificationCode {
  count: Int!
}

type Appointment implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  start_time: DateTime!
  end_time: DateTime!
  chamber: Chamber
  hospital: Hospital
}

"""A connection to a list of items."""
type AppointmentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AppointmentEdge]!
  aggregate: AggregateAppointment!
}

input AppointmentCreateInput {
  id: ID
  start_time: DateTime!
  end_time: DateTime!
  chamber: ChamberCreateOneWithoutAppointmentsInput
  hospital: HospitalCreateOneWithoutAppointmentsInput
}

input AppointmentCreateManyWithoutChamberInput {
  create: [AppointmentCreateWithoutChamberInput!]
  connect: [AppointmentWhereUniqueInput!]
}

input AppointmentCreateManyWithoutHospitalInput {
  create: [AppointmentCreateWithoutHospitalInput!]
  connect: [AppointmentWhereUniqueInput!]
}

input AppointmentCreateWithoutChamberInput {
  id: ID
  start_time: DateTime!
  end_time: DateTime!
  hospital: HospitalCreateOneWithoutAppointmentsInput
}

input AppointmentCreateWithoutHospitalInput {
  id: ID
  start_time: DateTime!
  end_time: DateTime!
  chamber: ChamberCreateOneWithoutAppointmentsInput
}

"""An edge in a connection."""
type AppointmentEdge {
  """The item at the end of the edge."""
  node: Appointment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AppointmentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  start_time_ASC
  start_time_DESC
  end_time_ASC
  end_time_DESC
}

type AppointmentPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  start_time: DateTime!
  end_time: DateTime!
}

input AppointmentScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [AppointmentScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [AppointmentScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AppointmentScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  start_time: DateTime

  """All values that are not equal to given value."""
  start_time_not: DateTime

  """All values that are contained in given list."""
  start_time_in: [DateTime!]

  """All values that are not contained in given list."""
  start_time_not_in: [DateTime!]

  """All values less than the given value."""
  start_time_lt: DateTime

  """All values less than or equal the given value."""
  start_time_lte: DateTime

  """All values greater than the given value."""
  start_time_gt: DateTime

  """All values greater than or equal the given value."""
  start_time_gte: DateTime
  end_time: DateTime

  """All values that are not equal to given value."""
  end_time_not: DateTime

  """All values that are contained in given list."""
  end_time_in: [DateTime!]

  """All values that are not contained in given list."""
  end_time_not_in: [DateTime!]

  """All values less than the given value."""
  end_time_lt: DateTime

  """All values less than or equal the given value."""
  end_time_lte: DateTime

  """All values greater than the given value."""
  end_time_gt: DateTime

  """All values greater than or equal the given value."""
  end_time_gte: DateTime
}

type AppointmentSubscriptionPayload {
  mutation: MutationType!
  node: Appointment
  updatedFields: [String!]
  previousValues: AppointmentPreviousValues
}

input AppointmentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AppointmentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AppointmentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AppointmentSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AppointmentWhereInput
}

input AppointmentUpdateInput {
  start_time: DateTime
  end_time: DateTime
  chamber: ChamberUpdateOneWithoutAppointmentsInput
  hospital: HospitalUpdateOneWithoutAppointmentsInput
}

input AppointmentUpdateManyDataInput {
  start_time: DateTime
  end_time: DateTime
}

input AppointmentUpdateManyMutationInput {
  start_time: DateTime
  end_time: DateTime
}

input AppointmentUpdateManyWithoutChamberInput {
  create: [AppointmentCreateWithoutChamberInput!]
  connect: [AppointmentWhereUniqueInput!]
  set: [AppointmentWhereUniqueInput!]
  disconnect: [AppointmentWhereUniqueInput!]
  delete: [AppointmentWhereUniqueInput!]
  update: [AppointmentUpdateWithWhereUniqueWithoutChamberInput!]
  updateMany: [AppointmentUpdateManyWithWhereNestedInput!]
  deleteMany: [AppointmentScalarWhereInput!]
  upsert: [AppointmentUpsertWithWhereUniqueWithoutChamberInput!]
}

input AppointmentUpdateManyWithoutHospitalInput {
  create: [AppointmentCreateWithoutHospitalInput!]
  connect: [AppointmentWhereUniqueInput!]
  set: [AppointmentWhereUniqueInput!]
  disconnect: [AppointmentWhereUniqueInput!]
  delete: [AppointmentWhereUniqueInput!]
  update: [AppointmentUpdateWithWhereUniqueWithoutHospitalInput!]
  updateMany: [AppointmentUpdateManyWithWhereNestedInput!]
  deleteMany: [AppointmentScalarWhereInput!]
  upsert: [AppointmentUpsertWithWhereUniqueWithoutHospitalInput!]
}

input AppointmentUpdateManyWithWhereNestedInput {
  where: AppointmentScalarWhereInput!
  data: AppointmentUpdateManyDataInput!
}

input AppointmentUpdateWithoutChamberDataInput {
  start_time: DateTime
  end_time: DateTime
  hospital: HospitalUpdateOneWithoutAppointmentsInput
}

input AppointmentUpdateWithoutHospitalDataInput {
  start_time: DateTime
  end_time: DateTime
  chamber: ChamberUpdateOneWithoutAppointmentsInput
}

input AppointmentUpdateWithWhereUniqueWithoutChamberInput {
  where: AppointmentWhereUniqueInput!
  data: AppointmentUpdateWithoutChamberDataInput!
}

input AppointmentUpdateWithWhereUniqueWithoutHospitalInput {
  where: AppointmentWhereUniqueInput!
  data: AppointmentUpdateWithoutHospitalDataInput!
}

input AppointmentUpsertWithWhereUniqueWithoutChamberInput {
  where: AppointmentWhereUniqueInput!
  update: AppointmentUpdateWithoutChamberDataInput!
  create: AppointmentCreateWithoutChamberInput!
}

input AppointmentUpsertWithWhereUniqueWithoutHospitalInput {
  where: AppointmentWhereUniqueInput!
  update: AppointmentUpdateWithoutHospitalDataInput!
  create: AppointmentCreateWithoutHospitalInput!
}

input AppointmentWhereInput {
  """Logical AND on all given filters."""
  AND: [AppointmentWhereInput!]

  """Logical OR on all given filters."""
  OR: [AppointmentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AppointmentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  start_time: DateTime

  """All values that are not equal to given value."""
  start_time_not: DateTime

  """All values that are contained in given list."""
  start_time_in: [DateTime!]

  """All values that are not contained in given list."""
  start_time_not_in: [DateTime!]

  """All values less than the given value."""
  start_time_lt: DateTime

  """All values less than or equal the given value."""
  start_time_lte: DateTime

  """All values greater than the given value."""
  start_time_gt: DateTime

  """All values greater than or equal the given value."""
  start_time_gte: DateTime
  end_time: DateTime

  """All values that are not equal to given value."""
  end_time_not: DateTime

  """All values that are contained in given list."""
  end_time_in: [DateTime!]

  """All values that are not contained in given list."""
  end_time_not_in: [DateTime!]

  """All values less than the given value."""
  end_time_lt: DateTime

  """All values less than or equal the given value."""
  end_time_lte: DateTime

  """All values greater than the given value."""
  end_time_gt: DateTime

  """All values greater than or equal the given value."""
  end_time_gte: DateTime
  chamber: ChamberWhereInput
  hospital: HospitalWhereInput
}

input AppointmentWhereUniqueInput {
  id: ID
}

type Attending implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  doctor: Doctor
  chamber(where: ChamberWhereInput, orderBy: ChamberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chamber!]
}

"""A connection to a list of items."""
type AttendingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AttendingEdge]!
  aggregate: AggregateAttending!
}

input AttendingCreateInput {
  id: ID
  doctor: DoctorCreateOneWithoutAttendingInput
  chamber: ChamberCreateManyWithoutAttendingInput
}

input AttendingCreateManyWithoutChamberInput {
  create: [AttendingCreateWithoutChamberInput!]
  connect: [AttendingWhereUniqueInput!]
}

input AttendingCreateManyWithoutDoctorInput {
  create: [AttendingCreateWithoutDoctorInput!]
  connect: [AttendingWhereUniqueInput!]
}

input AttendingCreateWithoutChamberInput {
  id: ID
  doctor: DoctorCreateOneWithoutAttendingInput
}

input AttendingCreateWithoutDoctorInput {
  id: ID
  chamber: ChamberCreateManyWithoutAttendingInput
}

"""An edge in a connection."""
type AttendingEdge {
  """The item at the end of the edge."""
  node: Attending!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AttendingOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AttendingPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input AttendingScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [AttendingScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [AttendingScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AttendingScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type AttendingSubscriptionPayload {
  mutation: MutationType!
  node: Attending
  updatedFields: [String!]
  previousValues: AttendingPreviousValues
}

input AttendingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AttendingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AttendingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AttendingSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AttendingWhereInput
}

input AttendingUpdateInput {
  doctor: DoctorUpdateOneWithoutAttendingInput
  chamber: ChamberUpdateManyWithoutAttendingInput
}

input AttendingUpdateManyWithoutChamberInput {
  create: [AttendingCreateWithoutChamberInput!]
  connect: [AttendingWhereUniqueInput!]
  set: [AttendingWhereUniqueInput!]
  disconnect: [AttendingWhereUniqueInput!]
  delete: [AttendingWhereUniqueInput!]
  update: [AttendingUpdateWithWhereUniqueWithoutChamberInput!]
  deleteMany: [AttendingScalarWhereInput!]
  upsert: [AttendingUpsertWithWhereUniqueWithoutChamberInput!]
}

input AttendingUpdateManyWithoutDoctorInput {
  create: [AttendingCreateWithoutDoctorInput!]
  connect: [AttendingWhereUniqueInput!]
  set: [AttendingWhereUniqueInput!]
  disconnect: [AttendingWhereUniqueInput!]
  delete: [AttendingWhereUniqueInput!]
  update: [AttendingUpdateWithWhereUniqueWithoutDoctorInput!]
  deleteMany: [AttendingScalarWhereInput!]
  upsert: [AttendingUpsertWithWhereUniqueWithoutDoctorInput!]
}

input AttendingUpdateWithoutChamberDataInput {
  doctor: DoctorUpdateOneWithoutAttendingInput
}

input AttendingUpdateWithoutDoctorDataInput {
  chamber: ChamberUpdateManyWithoutAttendingInput
}

input AttendingUpdateWithWhereUniqueWithoutChamberInput {
  where: AttendingWhereUniqueInput!
  data: AttendingUpdateWithoutChamberDataInput!
}

input AttendingUpdateWithWhereUniqueWithoutDoctorInput {
  where: AttendingWhereUniqueInput!
  data: AttendingUpdateWithoutDoctorDataInput!
}

input AttendingUpsertWithWhereUniqueWithoutChamberInput {
  where: AttendingWhereUniqueInput!
  update: AttendingUpdateWithoutChamberDataInput!
  create: AttendingCreateWithoutChamberInput!
}

input AttendingUpsertWithWhereUniqueWithoutDoctorInput {
  where: AttendingWhereUniqueInput!
  update: AttendingUpdateWithoutDoctorDataInput!
  create: AttendingCreateWithoutDoctorInput!
}

input AttendingWhereInput {
  """Logical AND on all given filters."""
  AND: [AttendingWhereInput!]

  """Logical OR on all given filters."""
  OR: [AttendingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AttendingWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  doctor: DoctorWhereInput
  chamber_every: ChamberWhereInput
  chamber_some: ChamberWhereInput
  chamber_none: ChamberWhereInput
}

input AttendingWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Chamber implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  start_time: DateTime!
  end_time: DateTime!
  attending(where: AttendingWhereInput, orderBy: AttendingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attending!]
  appointments(where: AppointmentWhereInput, orderBy: AppointmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Appointment!]
  doctor(where: DoctorWhereInput, orderBy: DoctorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Doctor!]
  location: Location
}

"""A connection to a list of items."""
type ChamberConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ChamberEdge]!
  aggregate: AggregateChamber!
}

input ChamberCreateInput {
  id: ID
  name: String!
  start_time: DateTime!
  end_time: DateTime!
  attending: AttendingCreateManyWithoutChamberInput
  appointments: AppointmentCreateManyWithoutChamberInput
  doctor: DoctorCreateManyWithoutChamberInput
  location: LocationCreateOneWithoutChamberInput
}

input ChamberCreateManyWithoutAttendingInput {
  create: [ChamberCreateWithoutAttendingInput!]
  connect: [ChamberWhereUniqueInput!]
}

input ChamberCreateManyWithoutDoctorInput {
  create: [ChamberCreateWithoutDoctorInput!]
  connect: [ChamberWhereUniqueInput!]
}

input ChamberCreateOneWithoutAppointmentsInput {
  create: ChamberCreateWithoutAppointmentsInput
  connect: ChamberWhereUniqueInput
}

input ChamberCreateOneWithoutLocationInput {
  create: ChamberCreateWithoutLocationInput
  connect: ChamberWhereUniqueInput
}

input ChamberCreateWithoutAppointmentsInput {
  id: ID
  name: String!
  start_time: DateTime!
  end_time: DateTime!
  attending: AttendingCreateManyWithoutChamberInput
  doctor: DoctorCreateManyWithoutChamberInput
  location: LocationCreateOneWithoutChamberInput
}

input ChamberCreateWithoutAttendingInput {
  id: ID
  name: String!
  start_time: DateTime!
  end_time: DateTime!
  appointments: AppointmentCreateManyWithoutChamberInput
  doctor: DoctorCreateManyWithoutChamberInput
  location: LocationCreateOneWithoutChamberInput
}

input ChamberCreateWithoutDoctorInput {
  id: ID
  name: String!
  start_time: DateTime!
  end_time: DateTime!
  attending: AttendingCreateManyWithoutChamberInput
  appointments: AppointmentCreateManyWithoutChamberInput
  location: LocationCreateOneWithoutChamberInput
}

input ChamberCreateWithoutLocationInput {
  id: ID
  name: String!
  start_time: DateTime!
  end_time: DateTime!
  attending: AttendingCreateManyWithoutChamberInput
  appointments: AppointmentCreateManyWithoutChamberInput
  doctor: DoctorCreateManyWithoutChamberInput
}

"""An edge in a connection."""
type ChamberEdge {
  """The item at the end of the edge."""
  node: Chamber!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ChamberOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  start_time_ASC
  start_time_DESC
  end_time_ASC
  end_time_DESC
}

type ChamberPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  start_time: DateTime!
  end_time: DateTime!
}

input ChamberScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ChamberScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChamberScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChamberScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  start_time: DateTime

  """All values that are not equal to given value."""
  start_time_not: DateTime

  """All values that are contained in given list."""
  start_time_in: [DateTime!]

  """All values that are not contained in given list."""
  start_time_not_in: [DateTime!]

  """All values less than the given value."""
  start_time_lt: DateTime

  """All values less than or equal the given value."""
  start_time_lte: DateTime

  """All values greater than the given value."""
  start_time_gt: DateTime

  """All values greater than or equal the given value."""
  start_time_gte: DateTime
  end_time: DateTime

  """All values that are not equal to given value."""
  end_time_not: DateTime

  """All values that are contained in given list."""
  end_time_in: [DateTime!]

  """All values that are not contained in given list."""
  end_time_not_in: [DateTime!]

  """All values less than the given value."""
  end_time_lt: DateTime

  """All values less than or equal the given value."""
  end_time_lte: DateTime

  """All values greater than the given value."""
  end_time_gt: DateTime

  """All values greater than or equal the given value."""
  end_time_gte: DateTime
}

type ChamberSubscriptionPayload {
  mutation: MutationType!
  node: Chamber
  updatedFields: [String!]
  previousValues: ChamberPreviousValues
}

input ChamberSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ChamberSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChamberSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChamberSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ChamberWhereInput
}

input ChamberUpdateInput {
  name: String
  start_time: DateTime
  end_time: DateTime
  attending: AttendingUpdateManyWithoutChamberInput
  appointments: AppointmentUpdateManyWithoutChamberInput
  doctor: DoctorUpdateManyWithoutChamberInput
  location: LocationUpdateOneWithoutChamberInput
}

input ChamberUpdateManyDataInput {
  name: String
  start_time: DateTime
  end_time: DateTime
}

input ChamberUpdateManyMutationInput {
  name: String
  start_time: DateTime
  end_time: DateTime
}

input ChamberUpdateManyWithoutAttendingInput {
  create: [ChamberCreateWithoutAttendingInput!]
  connect: [ChamberWhereUniqueInput!]
  set: [ChamberWhereUniqueInput!]
  disconnect: [ChamberWhereUniqueInput!]
  delete: [ChamberWhereUniqueInput!]
  update: [ChamberUpdateWithWhereUniqueWithoutAttendingInput!]
  updateMany: [ChamberUpdateManyWithWhereNestedInput!]
  deleteMany: [ChamberScalarWhereInput!]
  upsert: [ChamberUpsertWithWhereUniqueWithoutAttendingInput!]
}

input ChamberUpdateManyWithoutDoctorInput {
  create: [ChamberCreateWithoutDoctorInput!]
  connect: [ChamberWhereUniqueInput!]
  set: [ChamberWhereUniqueInput!]
  disconnect: [ChamberWhereUniqueInput!]
  delete: [ChamberWhereUniqueInput!]
  update: [ChamberUpdateWithWhereUniqueWithoutDoctorInput!]
  updateMany: [ChamberUpdateManyWithWhereNestedInput!]
  deleteMany: [ChamberScalarWhereInput!]
  upsert: [ChamberUpsertWithWhereUniqueWithoutDoctorInput!]
}

input ChamberUpdateManyWithWhereNestedInput {
  where: ChamberScalarWhereInput!
  data: ChamberUpdateManyDataInput!
}

input ChamberUpdateOneWithoutAppointmentsInput {
  create: ChamberCreateWithoutAppointmentsInput
  connect: ChamberWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ChamberUpdateWithoutAppointmentsDataInput
  upsert: ChamberUpsertWithoutAppointmentsInput
}

input ChamberUpdateOneWithoutLocationInput {
  create: ChamberCreateWithoutLocationInput
  connect: ChamberWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ChamberUpdateWithoutLocationDataInput
  upsert: ChamberUpsertWithoutLocationInput
}

input ChamberUpdateWithoutAppointmentsDataInput {
  name: String
  start_time: DateTime
  end_time: DateTime
  attending: AttendingUpdateManyWithoutChamberInput
  doctor: DoctorUpdateManyWithoutChamberInput
  location: LocationUpdateOneWithoutChamberInput
}

input ChamberUpdateWithoutAttendingDataInput {
  name: String
  start_time: DateTime
  end_time: DateTime
  appointments: AppointmentUpdateManyWithoutChamberInput
  doctor: DoctorUpdateManyWithoutChamberInput
  location: LocationUpdateOneWithoutChamberInput
}

input ChamberUpdateWithoutDoctorDataInput {
  name: String
  start_time: DateTime
  end_time: DateTime
  attending: AttendingUpdateManyWithoutChamberInput
  appointments: AppointmentUpdateManyWithoutChamberInput
  location: LocationUpdateOneWithoutChamberInput
}

input ChamberUpdateWithoutLocationDataInput {
  name: String
  start_time: DateTime
  end_time: DateTime
  attending: AttendingUpdateManyWithoutChamberInput
  appointments: AppointmentUpdateManyWithoutChamberInput
  doctor: DoctorUpdateManyWithoutChamberInput
}

input ChamberUpdateWithWhereUniqueWithoutAttendingInput {
  where: ChamberWhereUniqueInput!
  data: ChamberUpdateWithoutAttendingDataInput!
}

input ChamberUpdateWithWhereUniqueWithoutDoctorInput {
  where: ChamberWhereUniqueInput!
  data: ChamberUpdateWithoutDoctorDataInput!
}

input ChamberUpsertWithoutAppointmentsInput {
  update: ChamberUpdateWithoutAppointmentsDataInput!
  create: ChamberCreateWithoutAppointmentsInput!
}

input ChamberUpsertWithoutLocationInput {
  update: ChamberUpdateWithoutLocationDataInput!
  create: ChamberCreateWithoutLocationInput!
}

input ChamberUpsertWithWhereUniqueWithoutAttendingInput {
  where: ChamberWhereUniqueInput!
  update: ChamberUpdateWithoutAttendingDataInput!
  create: ChamberCreateWithoutAttendingInput!
}

input ChamberUpsertWithWhereUniqueWithoutDoctorInput {
  where: ChamberWhereUniqueInput!
  update: ChamberUpdateWithoutDoctorDataInput!
  create: ChamberCreateWithoutDoctorInput!
}

input ChamberWhereInput {
  """Logical AND on all given filters."""
  AND: [ChamberWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChamberWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChamberWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  start_time: DateTime

  """All values that are not equal to given value."""
  start_time_not: DateTime

  """All values that are contained in given list."""
  start_time_in: [DateTime!]

  """All values that are not contained in given list."""
  start_time_not_in: [DateTime!]

  """All values less than the given value."""
  start_time_lt: DateTime

  """All values less than or equal the given value."""
  start_time_lte: DateTime

  """All values greater than the given value."""
  start_time_gt: DateTime

  """All values greater than or equal the given value."""
  start_time_gte: DateTime
  end_time: DateTime

  """All values that are not equal to given value."""
  end_time_not: DateTime

  """All values that are contained in given list."""
  end_time_in: [DateTime!]

  """All values that are not contained in given list."""
  end_time_not_in: [DateTime!]

  """All values less than the given value."""
  end_time_lt: DateTime

  """All values less than or equal the given value."""
  end_time_lte: DateTime

  """All values greater than the given value."""
  end_time_gt: DateTime

  """All values greater than or equal the given value."""
  end_time_gte: DateTime
  attending_every: AttendingWhereInput
  attending_some: AttendingWhereInput
  attending_none: AttendingWhereInput
  appointments_every: AppointmentWhereInput
  appointments_some: AppointmentWhereInput
  appointments_none: AppointmentWhereInput
  doctor_every: DoctorWhereInput
  doctor_some: DoctorWhereInput
  doctor_none: DoctorWhereInput
  location: LocationWhereInput
}

input ChamberWhereUniqueInput {
  id: ID
}

scalar DateTime

type Doctor implements Node {
  id: ID!
  name: String!
  specialization: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
  user: User!
  attending(where: AttendingWhereInput, orderBy: AttendingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attending!]
  chamber(where: ChamberWhereInput, orderBy: ChamberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chamber!]
  verifac: VerificationCode
  profile: Profile
}

"""A connection to a list of items."""
type DoctorConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DoctorEdge]!
  aggregate: AggregateDoctor!
}

input DoctorCreateInput {
  id: ID
  name: String!
  specialization: String!
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
  user: UserCreateOneWithoutDoctorInput!
  attending: AttendingCreateManyWithoutDoctorInput
  chamber: ChamberCreateManyWithoutDoctorInput
  verifac: VerificationCodeCreateOneWithoutDoctorInput
  profile: ProfileCreateOneWithoutDoctorInput
}

input DoctorCreateManyWithoutChamberInput {
  create: [DoctorCreateWithoutChamberInput!]
  connect: [DoctorWhereUniqueInput!]
}

input DoctorCreateOneWithoutAttendingInput {
  create: DoctorCreateWithoutAttendingInput
  connect: DoctorWhereUniqueInput
}

input DoctorCreateOneWithoutProfileInput {
  create: DoctorCreateWithoutProfileInput
  connect: DoctorWhereUniqueInput
}

input DoctorCreateOneWithoutUserInput {
  create: DoctorCreateWithoutUserInput
  connect: DoctorWhereUniqueInput
}

input DoctorCreateOneWithoutVerifacInput {
  create: DoctorCreateWithoutVerifacInput
  connect: DoctorWhereUniqueInput
}

input DoctorCreateWithoutAttendingInput {
  id: ID
  name: String!
  specialization: String!
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
  user: UserCreateOneWithoutDoctorInput!
  chamber: ChamberCreateManyWithoutDoctorInput
  verifac: VerificationCodeCreateOneWithoutDoctorInput
  profile: ProfileCreateOneWithoutDoctorInput
}

input DoctorCreateWithoutChamberInput {
  id: ID
  name: String!
  specialization: String!
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
  user: UserCreateOneWithoutDoctorInput!
  attending: AttendingCreateManyWithoutDoctorInput
  verifac: VerificationCodeCreateOneWithoutDoctorInput
  profile: ProfileCreateOneWithoutDoctorInput
}

input DoctorCreateWithoutProfileInput {
  id: ID
  name: String!
  specialization: String!
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
  user: UserCreateOneWithoutDoctorInput!
  attending: AttendingCreateManyWithoutDoctorInput
  chamber: ChamberCreateManyWithoutDoctorInput
  verifac: VerificationCodeCreateOneWithoutDoctorInput
}

input DoctorCreateWithoutUserInput {
  id: ID
  name: String!
  specialization: String!
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
  attending: AttendingCreateManyWithoutDoctorInput
  chamber: ChamberCreateManyWithoutDoctorInput
  verifac: VerificationCodeCreateOneWithoutDoctorInput
  profile: ProfileCreateOneWithoutDoctorInput
}

input DoctorCreateWithoutVerifacInput {
  id: ID
  name: String!
  specialization: String!
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
  user: UserCreateOneWithoutDoctorInput!
  attending: AttendingCreateManyWithoutDoctorInput
  chamber: ChamberCreateManyWithoutDoctorInput
  profile: ProfileCreateOneWithoutDoctorInput
}

"""An edge in a connection."""
type DoctorEdge {
  """The item at the end of the edge."""
  node: Doctor!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DoctorOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  specialization_ASC
  specialization_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  emailVerification_ASC
  emailVerification_DESC
  phone_ASC
  phone_DESC
  address_ASC
  address_DESC
  state_ASC
  state_DESC
  zip_ASC
  zip_DESC
}

type DoctorPreviousValues {
  id: ID!
  name: String!
  specialization: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
}

input DoctorScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [DoctorScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [DoctorScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DoctorScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  specialization: String

  """All values that are not equal to given value."""
  specialization_not: String

  """All values that are contained in given list."""
  specialization_in: [String!]

  """All values that are not contained in given list."""
  specialization_not_in: [String!]

  """All values less than the given value."""
  specialization_lt: String

  """All values less than or equal the given value."""
  specialization_lte: String

  """All values greater than the given value."""
  specialization_gt: String

  """All values greater than or equal the given value."""
  specialization_gte: String

  """All values containing the given string."""
  specialization_contains: String

  """All values not containing the given string."""
  specialization_not_contains: String

  """All values starting with the given string."""
  specialization_starts_with: String

  """All values not starting with the given string."""
  specialization_not_starts_with: String

  """All values ending with the given string."""
  specialization_ends_with: String

  """All values not ending with the given string."""
  specialization_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  emailVerification: Boolean

  """All values that are not equal to given value."""
  emailVerification_not: Boolean
  phone: String

  """All values that are not equal to given value."""
  phone_not: String

  """All values that are contained in given list."""
  phone_in: [String!]

  """All values that are not contained in given list."""
  phone_not_in: [String!]

  """All values less than the given value."""
  phone_lt: String

  """All values less than or equal the given value."""
  phone_lte: String

  """All values greater than the given value."""
  phone_gt: String

  """All values greater than or equal the given value."""
  phone_gte: String

  """All values containing the given string."""
  phone_contains: String

  """All values not containing the given string."""
  phone_not_contains: String

  """All values starting with the given string."""
  phone_starts_with: String

  """All values not starting with the given string."""
  phone_not_starts_with: String

  """All values ending with the given string."""
  phone_ends_with: String

  """All values not ending with the given string."""
  phone_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  state: String

  """All values that are not equal to given value."""
  state_not: String

  """All values that are contained in given list."""
  state_in: [String!]

  """All values that are not contained in given list."""
  state_not_in: [String!]

  """All values less than the given value."""
  state_lt: String

  """All values less than or equal the given value."""
  state_lte: String

  """All values greater than the given value."""
  state_gt: String

  """All values greater than or equal the given value."""
  state_gte: String

  """All values containing the given string."""
  state_contains: String

  """All values not containing the given string."""
  state_not_contains: String

  """All values starting with the given string."""
  state_starts_with: String

  """All values not starting with the given string."""
  state_not_starts_with: String

  """All values ending with the given string."""
  state_ends_with: String

  """All values not ending with the given string."""
  state_not_ends_with: String
  zip: String

  """All values that are not equal to given value."""
  zip_not: String

  """All values that are contained in given list."""
  zip_in: [String!]

  """All values that are not contained in given list."""
  zip_not_in: [String!]

  """All values less than the given value."""
  zip_lt: String

  """All values less than or equal the given value."""
  zip_lte: String

  """All values greater than the given value."""
  zip_gt: String

  """All values greater than or equal the given value."""
  zip_gte: String

  """All values containing the given string."""
  zip_contains: String

  """All values not containing the given string."""
  zip_not_contains: String

  """All values starting with the given string."""
  zip_starts_with: String

  """All values not starting with the given string."""
  zip_not_starts_with: String

  """All values ending with the given string."""
  zip_ends_with: String

  """All values not ending with the given string."""
  zip_not_ends_with: String
}

type DoctorSubscriptionPayload {
  mutation: MutationType!
  node: Doctor
  updatedFields: [String!]
  previousValues: DoctorPreviousValues
}

input DoctorSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DoctorSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DoctorSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DoctorSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: DoctorWhereInput
}

input DoctorUpdateInput {
  name: String
  specialization: String
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
  user: UserUpdateOneRequiredWithoutDoctorInput
  attending: AttendingUpdateManyWithoutDoctorInput
  chamber: ChamberUpdateManyWithoutDoctorInput
  verifac: VerificationCodeUpdateOneWithoutDoctorInput
  profile: ProfileUpdateOneWithoutDoctorInput
}

input DoctorUpdateManyDataInput {
  name: String
  specialization: String
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
}

input DoctorUpdateManyMutationInput {
  name: String
  specialization: String
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
}

input DoctorUpdateManyWithoutChamberInput {
  create: [DoctorCreateWithoutChamberInput!]
  connect: [DoctorWhereUniqueInput!]
  set: [DoctorWhereUniqueInput!]
  disconnect: [DoctorWhereUniqueInput!]
  delete: [DoctorWhereUniqueInput!]
  update: [DoctorUpdateWithWhereUniqueWithoutChamberInput!]
  updateMany: [DoctorUpdateManyWithWhereNestedInput!]
  deleteMany: [DoctorScalarWhereInput!]
  upsert: [DoctorUpsertWithWhereUniqueWithoutChamberInput!]
}

input DoctorUpdateManyWithWhereNestedInput {
  where: DoctorScalarWhereInput!
  data: DoctorUpdateManyDataInput!
}

input DoctorUpdateOneWithoutAttendingInput {
  create: DoctorCreateWithoutAttendingInput
  connect: DoctorWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: DoctorUpdateWithoutAttendingDataInput
  upsert: DoctorUpsertWithoutAttendingInput
}

input DoctorUpdateOneWithoutProfileInput {
  create: DoctorCreateWithoutProfileInput
  connect: DoctorWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: DoctorUpdateWithoutProfileDataInput
  upsert: DoctorUpsertWithoutProfileInput
}

input DoctorUpdateOneWithoutUserInput {
  create: DoctorCreateWithoutUserInput
  connect: DoctorWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: DoctorUpdateWithoutUserDataInput
  upsert: DoctorUpsertWithoutUserInput
}

input DoctorUpdateOneWithoutVerifacInput {
  create: DoctorCreateWithoutVerifacInput
  connect: DoctorWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: DoctorUpdateWithoutVerifacDataInput
  upsert: DoctorUpsertWithoutVerifacInput
}

input DoctorUpdateWithoutAttendingDataInput {
  name: String
  specialization: String
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
  user: UserUpdateOneRequiredWithoutDoctorInput
  chamber: ChamberUpdateManyWithoutDoctorInput
  verifac: VerificationCodeUpdateOneWithoutDoctorInput
  profile: ProfileUpdateOneWithoutDoctorInput
}

input DoctorUpdateWithoutChamberDataInput {
  name: String
  specialization: String
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
  user: UserUpdateOneRequiredWithoutDoctorInput
  attending: AttendingUpdateManyWithoutDoctorInput
  verifac: VerificationCodeUpdateOneWithoutDoctorInput
  profile: ProfileUpdateOneWithoutDoctorInput
}

input DoctorUpdateWithoutProfileDataInput {
  name: String
  specialization: String
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
  user: UserUpdateOneRequiredWithoutDoctorInput
  attending: AttendingUpdateManyWithoutDoctorInput
  chamber: ChamberUpdateManyWithoutDoctorInput
  verifac: VerificationCodeUpdateOneWithoutDoctorInput
}

input DoctorUpdateWithoutUserDataInput {
  name: String
  specialization: String
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
  attending: AttendingUpdateManyWithoutDoctorInput
  chamber: ChamberUpdateManyWithoutDoctorInput
  verifac: VerificationCodeUpdateOneWithoutDoctorInput
  profile: ProfileUpdateOneWithoutDoctorInput
}

input DoctorUpdateWithoutVerifacDataInput {
  name: String
  specialization: String
  emailVerification: Boolean
  phone: String
  address: String
  state: String
  zip: String
  user: UserUpdateOneRequiredWithoutDoctorInput
  attending: AttendingUpdateManyWithoutDoctorInput
  chamber: ChamberUpdateManyWithoutDoctorInput
  profile: ProfileUpdateOneWithoutDoctorInput
}

input DoctorUpdateWithWhereUniqueWithoutChamberInput {
  where: DoctorWhereUniqueInput!
  data: DoctorUpdateWithoutChamberDataInput!
}

input DoctorUpsertWithoutAttendingInput {
  update: DoctorUpdateWithoutAttendingDataInput!
  create: DoctorCreateWithoutAttendingInput!
}

input DoctorUpsertWithoutProfileInput {
  update: DoctorUpdateWithoutProfileDataInput!
  create: DoctorCreateWithoutProfileInput!
}

input DoctorUpsertWithoutUserInput {
  update: DoctorUpdateWithoutUserDataInput!
  create: DoctorCreateWithoutUserInput!
}

input DoctorUpsertWithoutVerifacInput {
  update: DoctorUpdateWithoutVerifacDataInput!
  create: DoctorCreateWithoutVerifacInput!
}

input DoctorUpsertWithWhereUniqueWithoutChamberInput {
  where: DoctorWhereUniqueInput!
  update: DoctorUpdateWithoutChamberDataInput!
  create: DoctorCreateWithoutChamberInput!
}

input DoctorWhereInput {
  """Logical AND on all given filters."""
  AND: [DoctorWhereInput!]

  """Logical OR on all given filters."""
  OR: [DoctorWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DoctorWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  specialization: String

  """All values that are not equal to given value."""
  specialization_not: String

  """All values that are contained in given list."""
  specialization_in: [String!]

  """All values that are not contained in given list."""
  specialization_not_in: [String!]

  """All values less than the given value."""
  specialization_lt: String

  """All values less than or equal the given value."""
  specialization_lte: String

  """All values greater than the given value."""
  specialization_gt: String

  """All values greater than or equal the given value."""
  specialization_gte: String

  """All values containing the given string."""
  specialization_contains: String

  """All values not containing the given string."""
  specialization_not_contains: String

  """All values starting with the given string."""
  specialization_starts_with: String

  """All values not starting with the given string."""
  specialization_not_starts_with: String

  """All values ending with the given string."""
  specialization_ends_with: String

  """All values not ending with the given string."""
  specialization_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  emailVerification: Boolean

  """All values that are not equal to given value."""
  emailVerification_not: Boolean
  phone: String

  """All values that are not equal to given value."""
  phone_not: String

  """All values that are contained in given list."""
  phone_in: [String!]

  """All values that are not contained in given list."""
  phone_not_in: [String!]

  """All values less than the given value."""
  phone_lt: String

  """All values less than or equal the given value."""
  phone_lte: String

  """All values greater than the given value."""
  phone_gt: String

  """All values greater than or equal the given value."""
  phone_gte: String

  """All values containing the given string."""
  phone_contains: String

  """All values not containing the given string."""
  phone_not_contains: String

  """All values starting with the given string."""
  phone_starts_with: String

  """All values not starting with the given string."""
  phone_not_starts_with: String

  """All values ending with the given string."""
  phone_ends_with: String

  """All values not ending with the given string."""
  phone_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  state: String

  """All values that are not equal to given value."""
  state_not: String

  """All values that are contained in given list."""
  state_in: [String!]

  """All values that are not contained in given list."""
  state_not_in: [String!]

  """All values less than the given value."""
  state_lt: String

  """All values less than or equal the given value."""
  state_lte: String

  """All values greater than the given value."""
  state_gt: String

  """All values greater than or equal the given value."""
  state_gte: String

  """All values containing the given string."""
  state_contains: String

  """All values not containing the given string."""
  state_not_contains: String

  """All values starting with the given string."""
  state_starts_with: String

  """All values not starting with the given string."""
  state_not_starts_with: String

  """All values ending with the given string."""
  state_ends_with: String

  """All values not ending with the given string."""
  state_not_ends_with: String
  zip: String

  """All values that are not equal to given value."""
  zip_not: String

  """All values that are contained in given list."""
  zip_in: [String!]

  """All values that are not contained in given list."""
  zip_not_in: [String!]

  """All values less than the given value."""
  zip_lt: String

  """All values less than or equal the given value."""
  zip_lte: String

  """All values greater than the given value."""
  zip_gt: String

  """All values greater than or equal the given value."""
  zip_gte: String

  """All values containing the given string."""
  zip_contains: String

  """All values not containing the given string."""
  zip_not_contains: String

  """All values starting with the given string."""
  zip_starts_with: String

  """All values not starting with the given string."""
  zip_not_starts_with: String

  """All values ending with the given string."""
  zip_ends_with: String

  """All values not ending with the given string."""
  zip_not_ends_with: String
  user: UserWhereInput
  attending_every: AttendingWhereInput
  attending_some: AttendingWhereInput
  attending_none: AttendingWhereInput
  chamber_every: ChamberWhereInput
  chamber_some: ChamberWhereInput
  chamber_none: ChamberWhereInput
  verifac: VerificationCodeWhereInput
  profile: ProfileWhereInput
}

input DoctorWhereUniqueInput {
  id: ID
}

type Hospital implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  emailVerification: Boolean
  name: String!
  profile: Profile!
  controllers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  appointments(where: AppointmentWhereInput, orderBy: AppointmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Appointment!]
  location: Location
}

"""A connection to a list of items."""
type HospitalConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [HospitalEdge]!
  aggregate: AggregateHospital!
}

input HospitalCreateInput {
  id: ID
  emailVerification: Boolean
  name: String!
  profile: ProfileCreateOneWithoutHospitalInput!
  controllers: UserCreateManyWithoutHospitalInput
  appointments: AppointmentCreateManyWithoutHospitalInput
  location: LocationCreateOneWithoutHospitalInput
}

input HospitalCreateOneWithoutAppointmentsInput {
  create: HospitalCreateWithoutAppointmentsInput
  connect: HospitalWhereUniqueInput
}

input HospitalCreateOneWithoutControllersInput {
  create: HospitalCreateWithoutControllersInput
  connect: HospitalWhereUniqueInput
}

input HospitalCreateOneWithoutLocationInput {
  create: HospitalCreateWithoutLocationInput
  connect: HospitalWhereUniqueInput
}

input HospitalCreateOneWithoutProfileInput {
  create: HospitalCreateWithoutProfileInput
  connect: HospitalWhereUniqueInput
}

input HospitalCreateWithoutAppointmentsInput {
  id: ID
  emailVerification: Boolean
  name: String!
  profile: ProfileCreateOneWithoutHospitalInput!
  controllers: UserCreateManyWithoutHospitalInput
  location: LocationCreateOneWithoutHospitalInput
}

input HospitalCreateWithoutControllersInput {
  id: ID
  emailVerification: Boolean
  name: String!
  profile: ProfileCreateOneWithoutHospitalInput!
  appointments: AppointmentCreateManyWithoutHospitalInput
  location: LocationCreateOneWithoutHospitalInput
}

input HospitalCreateWithoutLocationInput {
  id: ID
  emailVerification: Boolean
  name: String!
  profile: ProfileCreateOneWithoutHospitalInput!
  controllers: UserCreateManyWithoutHospitalInput
  appointments: AppointmentCreateManyWithoutHospitalInput
}

input HospitalCreateWithoutProfileInput {
  id: ID
  emailVerification: Boolean
  name: String!
  controllers: UserCreateManyWithoutHospitalInput
  appointments: AppointmentCreateManyWithoutHospitalInput
  location: LocationCreateOneWithoutHospitalInput
}

"""An edge in a connection."""
type HospitalEdge {
  """The item at the end of the edge."""
  node: Hospital!

  """A cursor for use in pagination."""
  cursor: String!
}

enum HospitalOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  emailVerification_ASC
  emailVerification_DESC
  name_ASC
  name_DESC
}

type HospitalPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  emailVerification: Boolean
  name: String!
}

type HospitalSubscriptionPayload {
  mutation: MutationType!
  node: Hospital
  updatedFields: [String!]
  previousValues: HospitalPreviousValues
}

input HospitalSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [HospitalSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [HospitalSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HospitalSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: HospitalWhereInput
}

input HospitalUpdateInput {
  emailVerification: Boolean
  name: String
  profile: ProfileUpdateOneRequiredWithoutHospitalInput
  controllers: UserUpdateManyWithoutHospitalInput
  appointments: AppointmentUpdateManyWithoutHospitalInput
  location: LocationUpdateOneWithoutHospitalInput
}

input HospitalUpdateManyMutationInput {
  emailVerification: Boolean
  name: String
}

input HospitalUpdateOneWithoutAppointmentsInput {
  create: HospitalCreateWithoutAppointmentsInput
  connect: HospitalWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: HospitalUpdateWithoutAppointmentsDataInput
  upsert: HospitalUpsertWithoutAppointmentsInput
}

input HospitalUpdateOneWithoutControllersInput {
  create: HospitalCreateWithoutControllersInput
  connect: HospitalWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: HospitalUpdateWithoutControllersDataInput
  upsert: HospitalUpsertWithoutControllersInput
}

input HospitalUpdateOneWithoutLocationInput {
  create: HospitalCreateWithoutLocationInput
  connect: HospitalWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: HospitalUpdateWithoutLocationDataInput
  upsert: HospitalUpsertWithoutLocationInput
}

input HospitalUpdateOneWithoutProfileInput {
  create: HospitalCreateWithoutProfileInput
  connect: HospitalWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: HospitalUpdateWithoutProfileDataInput
  upsert: HospitalUpsertWithoutProfileInput
}

input HospitalUpdateWithoutAppointmentsDataInput {
  emailVerification: Boolean
  name: String
  profile: ProfileUpdateOneRequiredWithoutHospitalInput
  controllers: UserUpdateManyWithoutHospitalInput
  location: LocationUpdateOneWithoutHospitalInput
}

input HospitalUpdateWithoutControllersDataInput {
  emailVerification: Boolean
  name: String
  profile: ProfileUpdateOneRequiredWithoutHospitalInput
  appointments: AppointmentUpdateManyWithoutHospitalInput
  location: LocationUpdateOneWithoutHospitalInput
}

input HospitalUpdateWithoutLocationDataInput {
  emailVerification: Boolean
  name: String
  profile: ProfileUpdateOneRequiredWithoutHospitalInput
  controllers: UserUpdateManyWithoutHospitalInput
  appointments: AppointmentUpdateManyWithoutHospitalInput
}

input HospitalUpdateWithoutProfileDataInput {
  emailVerification: Boolean
  name: String
  controllers: UserUpdateManyWithoutHospitalInput
  appointments: AppointmentUpdateManyWithoutHospitalInput
  location: LocationUpdateOneWithoutHospitalInput
}

input HospitalUpsertWithoutAppointmentsInput {
  update: HospitalUpdateWithoutAppointmentsDataInput!
  create: HospitalCreateWithoutAppointmentsInput!
}

input HospitalUpsertWithoutControllersInput {
  update: HospitalUpdateWithoutControllersDataInput!
  create: HospitalCreateWithoutControllersInput!
}

input HospitalUpsertWithoutLocationInput {
  update: HospitalUpdateWithoutLocationDataInput!
  create: HospitalCreateWithoutLocationInput!
}

input HospitalUpsertWithoutProfileInput {
  update: HospitalUpdateWithoutProfileDataInput!
  create: HospitalCreateWithoutProfileInput!
}

input HospitalWhereInput {
  """Logical AND on all given filters."""
  AND: [HospitalWhereInput!]

  """Logical OR on all given filters."""
  OR: [HospitalWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HospitalWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  emailVerification: Boolean

  """All values that are not equal to given value."""
  emailVerification_not: Boolean
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  profile: ProfileWhereInput
  controllers_every: UserWhereInput
  controllers_some: UserWhereInput
  controllers_none: UserWhereInput
  appointments_every: AppointmentWhereInput
  appointments_some: AppointmentWhereInput
  appointments_none: AppointmentWhereInput
  location: LocationWhereInput
}

input HospitalWhereUniqueInput {
  id: ID
}

"""Raw JSON value"""
scalar Json

type Location implements Node {
  id: ID!
  address: String
  slug: String
  lat: String
  lng: String
  addressID: String
  createdAt: DateTime!
  updatedAt: DateTime!
  hospital: Hospital
  chamber: Chamber
}

"""A connection to a list of items."""
type LocationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  id: ID
  address: String
  slug: String
  lat: String
  lng: String
  addressID: String
  hospital: HospitalCreateOneWithoutLocationInput
  chamber: ChamberCreateOneWithoutLocationInput
}

input LocationCreateOneWithoutChamberInput {
  create: LocationCreateWithoutChamberInput
  connect: LocationWhereUniqueInput
}

input LocationCreateOneWithoutHospitalInput {
  create: LocationCreateWithoutHospitalInput
  connect: LocationWhereUniqueInput
}

input LocationCreateWithoutChamberInput {
  id: ID
  address: String
  slug: String
  lat: String
  lng: String
  addressID: String
  hospital: HospitalCreateOneWithoutLocationInput
}

input LocationCreateWithoutHospitalInput {
  id: ID
  address: String
  slug: String
  lat: String
  lng: String
  addressID: String
  chamber: ChamberCreateOneWithoutLocationInput
}

"""An edge in a connection."""
type LocationEdge {
  """The item at the end of the edge."""
  node: Location!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  address_ASC
  address_DESC
  slug_ASC
  slug_DESC
  lat_ASC
  lat_DESC
  lng_ASC
  lng_DESC
  addressID_ASC
  addressID_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LocationPreviousValues {
  id: ID!
  address: String
  slug: String
  lat: String
  lng: String
  addressID: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
}

input LocationUpdateInput {
  address: String
  slug: String
  lat: String
  lng: String
  addressID: String
  hospital: HospitalUpdateOneWithoutLocationInput
  chamber: ChamberUpdateOneWithoutLocationInput
}

input LocationUpdateManyMutationInput {
  address: String
  slug: String
  lat: String
  lng: String
  addressID: String
}

input LocationUpdateOneWithoutChamberInput {
  create: LocationCreateWithoutChamberInput
  connect: LocationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LocationUpdateWithoutChamberDataInput
  upsert: LocationUpsertWithoutChamberInput
}

input LocationUpdateOneWithoutHospitalInput {
  create: LocationCreateWithoutHospitalInput
  connect: LocationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LocationUpdateWithoutHospitalDataInput
  upsert: LocationUpsertWithoutHospitalInput
}

input LocationUpdateWithoutChamberDataInput {
  address: String
  slug: String
  lat: String
  lng: String
  addressID: String
  hospital: HospitalUpdateOneWithoutLocationInput
}

input LocationUpdateWithoutHospitalDataInput {
  address: String
  slug: String
  lat: String
  lng: String
  addressID: String
  chamber: ChamberUpdateOneWithoutLocationInput
}

input LocationUpsertWithoutChamberInput {
  update: LocationUpdateWithoutChamberDataInput!
  create: LocationCreateWithoutChamberInput!
}

input LocationUpsertWithoutHospitalInput {
  update: LocationUpdateWithoutHospitalDataInput!
  create: LocationCreateWithoutHospitalInput!
}

input LocationWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  lat: String

  """All values that are not equal to given value."""
  lat_not: String

  """All values that are contained in given list."""
  lat_in: [String!]

  """All values that are not contained in given list."""
  lat_not_in: [String!]

  """All values less than the given value."""
  lat_lt: String

  """All values less than or equal the given value."""
  lat_lte: String

  """All values greater than the given value."""
  lat_gt: String

  """All values greater than or equal the given value."""
  lat_gte: String

  """All values containing the given string."""
  lat_contains: String

  """All values not containing the given string."""
  lat_not_contains: String

  """All values starting with the given string."""
  lat_starts_with: String

  """All values not starting with the given string."""
  lat_not_starts_with: String

  """All values ending with the given string."""
  lat_ends_with: String

  """All values not ending with the given string."""
  lat_not_ends_with: String
  lng: String

  """All values that are not equal to given value."""
  lng_not: String

  """All values that are contained in given list."""
  lng_in: [String!]

  """All values that are not contained in given list."""
  lng_not_in: [String!]

  """All values less than the given value."""
  lng_lt: String

  """All values less than or equal the given value."""
  lng_lte: String

  """All values greater than the given value."""
  lng_gt: String

  """All values greater than or equal the given value."""
  lng_gte: String

  """All values containing the given string."""
  lng_contains: String

  """All values not containing the given string."""
  lng_not_contains: String

  """All values starting with the given string."""
  lng_starts_with: String

  """All values not starting with the given string."""
  lng_not_starts_with: String

  """All values ending with the given string."""
  lng_ends_with: String

  """All values not ending with the given string."""
  lng_not_ends_with: String
  addressID: String

  """All values that are not equal to given value."""
  addressID_not: String

  """All values that are contained in given list."""
  addressID_in: [String!]

  """All values that are not contained in given list."""
  addressID_not_in: [String!]

  """All values less than the given value."""
  addressID_lt: String

  """All values less than or equal the given value."""
  addressID_lte: String

  """All values greater than the given value."""
  addressID_gt: String

  """All values greater than or equal the given value."""
  addressID_gte: String

  """All values containing the given string."""
  addressID_contains: String

  """All values not containing the given string."""
  addressID_not_contains: String

  """All values starting with the given string."""
  addressID_starts_with: String

  """All values not starting with the given string."""
  addressID_not_starts_with: String

  """All values ending with the given string."""
  addressID_ends_with: String

  """All values not ending with the given string."""
  addressID_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  hospital: HospitalWhereInput
  chamber: ChamberWhereInput
}

input LocationWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createProfile(data: ProfileCreateInput!): Profile!
  createLocation(data: LocationCreateInput!): Location!
  createDoctor(data: DoctorCreateInput!): Doctor!
  createAppointment(data: AppointmentCreateInput!): Appointment!
  createHospital(data: HospitalCreateInput!): Hospital!
  createAttending(data: AttendingCreateInput!): Attending!
  createChamber(data: ChamberCreateInput!): Chamber!
  createVerificationCode(data: VerificationCodeCreateInput!): VerificationCode!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateDoctor(data: DoctorUpdateInput!, where: DoctorWhereUniqueInput!): Doctor
  updateAppointment(data: AppointmentUpdateInput!, where: AppointmentWhereUniqueInput!): Appointment
  updateHospital(data: HospitalUpdateInput!, where: HospitalWhereUniqueInput!): Hospital
  updateAttending(data: AttendingUpdateInput!, where: AttendingWhereUniqueInput!): Attending
  updateChamber(data: ChamberUpdateInput!, where: ChamberWhereUniqueInput!): Chamber
  updateVerificationCode(data: VerificationCodeUpdateInput!, where: VerificationCodeWhereUniqueInput!): VerificationCode
  deleteUser(where: UserWhereUniqueInput!): User
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteDoctor(where: DoctorWhereUniqueInput!): Doctor
  deleteAppointment(where: AppointmentWhereUniqueInput!): Appointment
  deleteHospital(where: HospitalWhereUniqueInput!): Hospital
  deleteAttending(where: AttendingWhereUniqueInput!): Attending
  deleteChamber(where: ChamberWhereUniqueInput!): Chamber
  deleteVerificationCode(where: VerificationCodeWhereUniqueInput!): VerificationCode
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  upsertDoctor(where: DoctorWhereUniqueInput!, create: DoctorCreateInput!, update: DoctorUpdateInput!): Doctor!
  upsertAppointment(where: AppointmentWhereUniqueInput!, create: AppointmentCreateInput!, update: AppointmentUpdateInput!): Appointment!
  upsertHospital(where: HospitalWhereUniqueInput!, create: HospitalCreateInput!, update: HospitalUpdateInput!): Hospital!
  upsertAttending(where: AttendingWhereUniqueInput!, create: AttendingCreateInput!, update: AttendingUpdateInput!): Attending!
  upsertChamber(where: ChamberWhereUniqueInput!, create: ChamberCreateInput!, update: ChamberUpdateInput!): Chamber!
  upsertVerificationCode(where: VerificationCodeWhereUniqueInput!, create: VerificationCodeCreateInput!, update: VerificationCodeUpdateInput!): VerificationCode!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyProfiles(data: ProfileUpdateManyMutationInput!, where: ProfileWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  updateManyDoctors(data: DoctorUpdateManyMutationInput!, where: DoctorWhereInput): BatchPayload!
  updateManyAppointments(data: AppointmentUpdateManyMutationInput!, where: AppointmentWhereInput): BatchPayload!
  updateManyHospitals(data: HospitalUpdateManyMutationInput!, where: HospitalWhereInput): BatchPayload!
  updateManyChambers(data: ChamberUpdateManyMutationInput!, where: ChamberWhereInput): BatchPayload!
  updateManyVerificationCodes(data: VerificationCodeUpdateManyMutationInput!, where: VerificationCodeWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyDoctors(where: DoctorWhereInput): BatchPayload!
  deleteManyAppointments(where: AppointmentWhereInput): BatchPayload!
  deleteManyHospitals(where: HospitalWhereInput): BatchPayload!
  deleteManyAttendings(where: AttendingWhereInput): BatchPayload!
  deleteManyChambers(where: ChamberWhereInput): BatchPayload!
  deleteManyVerificationCodes(where: VerificationCodeWhereInput): BatchPayload!
  executeRaw(database: PrismaDatabase, query: String!): Json!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PrismaDatabase {
  default
}

type Profile implements Node {
  id: ID!
  phone: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  active: Boolean
  hospital: Hospital
  doctor: Doctor
}

"""A connection to a list of items."""
type ProfileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreateInput {
  id: ID
  phone: String!
  active: Boolean
  hospital: HospitalCreateOneWithoutProfileInput
  doctor: DoctorCreateOneWithoutProfileInput
}

input ProfileCreateOneWithoutDoctorInput {
  create: ProfileCreateWithoutDoctorInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateOneWithoutHospitalInput {
  create: ProfileCreateWithoutHospitalInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateWithoutDoctorInput {
  id: ID
  phone: String!
  active: Boolean
  hospital: HospitalCreateOneWithoutProfileInput
}

input ProfileCreateWithoutHospitalInput {
  id: ID
  phone: String!
  active: Boolean
  doctor: DoctorCreateOneWithoutProfileInput
}

"""An edge in a connection."""
type ProfileEdge {
  """The item at the end of the edge."""
  node: Profile!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProfileOrderByInput {
  id_ASC
  id_DESC
  phone_ASC
  phone_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  active_ASC
  active_DESC
}

type ProfilePreviousValues {
  id: ID!
  phone: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  active: Boolean
}

type ProfileSubscriptionPayload {
  mutation: MutationType!
  node: Profile
  updatedFields: [String!]
  previousValues: ProfilePreviousValues
}

input ProfileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProfileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProfileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProfileSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProfileWhereInput
}

input ProfileUpdateInput {
  phone: String
  active: Boolean
  hospital: HospitalUpdateOneWithoutProfileInput
  doctor: DoctorUpdateOneWithoutProfileInput
}

input ProfileUpdateManyMutationInput {
  phone: String
  active: Boolean
}

input ProfileUpdateOneRequiredWithoutHospitalInput {
  create: ProfileCreateWithoutHospitalInput
  connect: ProfileWhereUniqueInput
  update: ProfileUpdateWithoutHospitalDataInput
  upsert: ProfileUpsertWithoutHospitalInput
}

input ProfileUpdateOneWithoutDoctorInput {
  create: ProfileCreateWithoutDoctorInput
  connect: ProfileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ProfileUpdateWithoutDoctorDataInput
  upsert: ProfileUpsertWithoutDoctorInput
}

input ProfileUpdateWithoutDoctorDataInput {
  phone: String
  active: Boolean
  hospital: HospitalUpdateOneWithoutProfileInput
}

input ProfileUpdateWithoutHospitalDataInput {
  phone: String
  active: Boolean
  doctor: DoctorUpdateOneWithoutProfileInput
}

input ProfileUpsertWithoutDoctorInput {
  update: ProfileUpdateWithoutDoctorDataInput!
  create: ProfileCreateWithoutDoctorInput!
}

input ProfileUpsertWithoutHospitalInput {
  update: ProfileUpdateWithoutHospitalDataInput!
  create: ProfileCreateWithoutHospitalInput!
}

input ProfileWhereInput {
  """Logical AND on all given filters."""
  AND: [ProfileWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProfileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProfileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  phone: String

  """All values that are not equal to given value."""
  phone_not: String

  """All values that are contained in given list."""
  phone_in: [String!]

  """All values that are not contained in given list."""
  phone_not_in: [String!]

  """All values less than the given value."""
  phone_lt: String

  """All values less than or equal the given value."""
  phone_lte: String

  """All values greater than the given value."""
  phone_gt: String

  """All values greater than or equal the given value."""
  phone_gte: String

  """All values containing the given string."""
  phone_contains: String

  """All values not containing the given string."""
  phone_not_contains: String

  """All values starting with the given string."""
  phone_starts_with: String

  """All values not starting with the given string."""
  phone_not_starts_with: String

  """All values ending with the given string."""
  phone_ends_with: String

  """All values not ending with the given string."""
  phone_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  active: Boolean

  """All values that are not equal to given value."""
  active_not: Boolean
  hospital: HospitalWhereInput
  doctor: DoctorWhereInput
}

input ProfileWhereUniqueInput {
  id: ID
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  doctors(where: DoctorWhereInput, orderBy: DoctorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Doctor]!
  appointments(where: AppointmentWhereInput, orderBy: AppointmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Appointment]!
  hospitals(where: HospitalWhereInput, orderBy: HospitalOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Hospital]!
  attendings(where: AttendingWhereInput, orderBy: AttendingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attending]!
  chambers(where: ChamberWhereInput, orderBy: ChamberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chamber]!
  verificationCodes(where: VerificationCodeWhereInput, orderBy: VerificationCodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [VerificationCode]!
  user(where: UserWhereUniqueInput!): User
  profile(where: ProfileWhereUniqueInput!): Profile
  location(where: LocationWhereUniqueInput!): Location
  doctor(where: DoctorWhereUniqueInput!): Doctor
  appointment(where: AppointmentWhereUniqueInput!): Appointment
  hospital(where: HospitalWhereUniqueInput!): Hospital
  attending(where: AttendingWhereUniqueInput!): Attending
  chamber(where: ChamberWhereUniqueInput!): Chamber
  verificationCode(where: VerificationCodeWhereUniqueInput!): VerificationCode
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  doctorsConnection(where: DoctorWhereInput, orderBy: DoctorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DoctorConnection!
  appointmentsConnection(where: AppointmentWhereInput, orderBy: AppointmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AppointmentConnection!
  hospitalsConnection(where: HospitalWhereInput, orderBy: HospitalOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HospitalConnection!
  attendingsConnection(where: AttendingWhereInput, orderBy: AttendingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AttendingConnection!
  chambersConnection(where: ChamberWhereInput, orderBy: ChamberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChamberConnection!
  verificationCodesConnection(where: VerificationCodeWhereInput, orderBy: VerificationCodeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VerificationCodeConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  doctor(where: DoctorSubscriptionWhereInput): DoctorSubscriptionPayload
  appointment(where: AppointmentSubscriptionWhereInput): AppointmentSubscriptionPayload
  hospital(where: HospitalSubscriptionWhereInput): HospitalSubscriptionPayload
  attending(where: AttendingSubscriptionWhereInput): AttendingSubscriptionPayload
  chamber(where: ChamberSubscriptionWhereInput): ChamberSubscriptionPayload
  verificationCode(where: VerificationCodeSubscriptionWhereInput): VerificationCodeSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
  emailVerification: Boolean
  roles: UserRoles
  createdAt: DateTime!
  updatedAt: DateTime!
  doctor: Doctor
  verifac: VerificationCode
  hospital: Hospital
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  emailVerification: Boolean
  roles: UserRoles
  doctor: DoctorCreateOneWithoutUserInput
  verifac: VerificationCodeCreateOneWithoutUserInput
  hospital: HospitalCreateOneWithoutControllersInput
}

input UserCreateManyWithoutHospitalInput {
  create: [UserCreateWithoutHospitalInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutDoctorInput {
  create: UserCreateWithoutDoctorInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVerifacInput {
  create: UserCreateWithoutVerifacInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutDoctorInput {
  id: ID
  name: String!
  email: String!
  password: String!
  emailVerification: Boolean
  roles: UserRoles
  verifac: VerificationCodeCreateOneWithoutUserInput
  hospital: HospitalCreateOneWithoutControllersInput
}

input UserCreateWithoutHospitalInput {
  id: ID
  name: String!
  email: String!
  password: String!
  emailVerification: Boolean
  roles: UserRoles
  doctor: DoctorCreateOneWithoutUserInput
  verifac: VerificationCodeCreateOneWithoutUserInput
}

input UserCreateWithoutVerifacInput {
  id: ID
  name: String!
  email: String!
  password: String!
  emailVerification: Boolean
  roles: UserRoles
  doctor: DoctorCreateOneWithoutUserInput
  hospital: HospitalCreateOneWithoutControllersInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  emailVerification_ASC
  emailVerification_DESC
  roles_ASC
  roles_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  emailVerification: Boolean
  roles: UserRoles
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum UserRoles {
  ADMIN
  USER
  STAFF
  DOCTOR
  ATTENDING
  HOSPITAL
}

input UserScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [UserScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  emailVerification: Boolean

  """All values that are not equal to given value."""
  emailVerification_not: Boolean
  roles: UserRoles

  """All values that are not equal to given value."""
  roles_not: UserRoles

  """All values that are contained in given list."""
  roles_in: [UserRoles!]

  """All values that are not contained in given list."""
  roles_not_in: [UserRoles!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  emailVerification: Boolean
  roles: UserRoles
  doctor: DoctorUpdateOneWithoutUserInput
  verifac: VerificationCodeUpdateOneWithoutUserInput
  hospital: HospitalUpdateOneWithoutControllersInput
}

input UserUpdateManyDataInput {
  name: String
  email: String
  password: String
  emailVerification: Boolean
  roles: UserRoles
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  emailVerification: Boolean
  roles: UserRoles
}

input UserUpdateManyWithoutHospitalInput {
  create: [UserCreateWithoutHospitalInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutHospitalInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutHospitalInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutDoctorInput {
  create: UserCreateWithoutDoctorInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutDoctorDataInput
  upsert: UserUpsertWithoutDoctorInput
}

input UserUpdateOneWithoutVerifacInput {
  create: UserCreateWithoutVerifacInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutVerifacDataInput
  upsert: UserUpsertWithoutVerifacInput
}

input UserUpdateWithoutDoctorDataInput {
  name: String
  email: String
  password: String
  emailVerification: Boolean
  roles: UserRoles
  verifac: VerificationCodeUpdateOneWithoutUserInput
  hospital: HospitalUpdateOneWithoutControllersInput
}

input UserUpdateWithoutHospitalDataInput {
  name: String
  email: String
  password: String
  emailVerification: Boolean
  roles: UserRoles
  doctor: DoctorUpdateOneWithoutUserInput
  verifac: VerificationCodeUpdateOneWithoutUserInput
}

input UserUpdateWithoutVerifacDataInput {
  name: String
  email: String
  password: String
  emailVerification: Boolean
  roles: UserRoles
  doctor: DoctorUpdateOneWithoutUserInput
  hospital: HospitalUpdateOneWithoutControllersInput
}

input UserUpdateWithWhereUniqueWithoutHospitalInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutHospitalDataInput!
}

input UserUpsertWithoutDoctorInput {
  update: UserUpdateWithoutDoctorDataInput!
  create: UserCreateWithoutDoctorInput!
}

input UserUpsertWithoutVerifacInput {
  update: UserUpdateWithoutVerifacDataInput!
  create: UserCreateWithoutVerifacInput!
}

input UserUpsertWithWhereUniqueWithoutHospitalInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutHospitalDataInput!
  create: UserCreateWithoutHospitalInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  emailVerification: Boolean

  """All values that are not equal to given value."""
  emailVerification_not: Boolean
  roles: UserRoles

  """All values that are not equal to given value."""
  roles_not: UserRoles

  """All values that are contained in given list."""
  roles_in: [UserRoles!]

  """All values that are not contained in given list."""
  roles_not_in: [UserRoles!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  doctor: DoctorWhereInput
  verifac: VerificationCodeWhereInput
  hospital: HospitalWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type VerificationCode implements Node {
  id: ID!
  uid: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  user: User
  doctor: Doctor
}

"""A connection to a list of items."""
type VerificationCodeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [VerificationCodeEdge]!
  aggregate: AggregateVerificationCode!
}

input VerificationCodeCreateInput {
  id: ID
  uid: String!
  user: UserCreateOneWithoutVerifacInput
  doctor: DoctorCreateOneWithoutVerifacInput
}

input VerificationCodeCreateOneWithoutDoctorInput {
  create: VerificationCodeCreateWithoutDoctorInput
  connect: VerificationCodeWhereUniqueInput
}

input VerificationCodeCreateOneWithoutUserInput {
  create: VerificationCodeCreateWithoutUserInput
  connect: VerificationCodeWhereUniqueInput
}

input VerificationCodeCreateWithoutDoctorInput {
  id: ID
  uid: String!
  user: UserCreateOneWithoutVerifacInput
}

input VerificationCodeCreateWithoutUserInput {
  id: ID
  uid: String!
  doctor: DoctorCreateOneWithoutVerifacInput
}

"""An edge in a connection."""
type VerificationCodeEdge {
  """The item at the end of the edge."""
  node: VerificationCode!

  """A cursor for use in pagination."""
  cursor: String!
}

enum VerificationCodeOrderByInput {
  id_ASC
  id_DESC
  uid_ASC
  uid_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VerificationCodePreviousValues {
  id: ID!
  uid: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type VerificationCodeSubscriptionPayload {
  mutation: MutationType!
  node: VerificationCode
  updatedFields: [String!]
  previousValues: VerificationCodePreviousValues
}

input VerificationCodeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [VerificationCodeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [VerificationCodeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VerificationCodeSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: VerificationCodeWhereInput
}

input VerificationCodeUpdateInput {
  uid: String
  user: UserUpdateOneWithoutVerifacInput
  doctor: DoctorUpdateOneWithoutVerifacInput
}

input VerificationCodeUpdateManyMutationInput {
  uid: String
}

input VerificationCodeUpdateOneWithoutDoctorInput {
  create: VerificationCodeCreateWithoutDoctorInput
  connect: VerificationCodeWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: VerificationCodeUpdateWithoutDoctorDataInput
  upsert: VerificationCodeUpsertWithoutDoctorInput
}

input VerificationCodeUpdateOneWithoutUserInput {
  create: VerificationCodeCreateWithoutUserInput
  connect: VerificationCodeWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: VerificationCodeUpdateWithoutUserDataInput
  upsert: VerificationCodeUpsertWithoutUserInput
}

input VerificationCodeUpdateWithoutDoctorDataInput {
  uid: String
  user: UserUpdateOneWithoutVerifacInput
}

input VerificationCodeUpdateWithoutUserDataInput {
  uid: String
  doctor: DoctorUpdateOneWithoutVerifacInput
}

input VerificationCodeUpsertWithoutDoctorInput {
  update: VerificationCodeUpdateWithoutDoctorDataInput!
  create: VerificationCodeCreateWithoutDoctorInput!
}

input VerificationCodeUpsertWithoutUserInput {
  update: VerificationCodeUpdateWithoutUserDataInput!
  create: VerificationCodeCreateWithoutUserInput!
}

input VerificationCodeWhereInput {
  """Logical AND on all given filters."""
  AND: [VerificationCodeWhereInput!]

  """Logical OR on all given filters."""
  OR: [VerificationCodeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VerificationCodeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  uid: String

  """All values that are not equal to given value."""
  uid_not: String

  """All values that are contained in given list."""
  uid_in: [String!]

  """All values that are not contained in given list."""
  uid_not_in: [String!]

  """All values less than the given value."""
  uid_lt: String

  """All values less than or equal the given value."""
  uid_lte: String

  """All values greater than the given value."""
  uid_gt: String

  """All values greater than or equal the given value."""
  uid_gte: String

  """All values containing the given string."""
  uid_contains: String

  """All values not containing the given string."""
  uid_not_contains: String

  """All values starting with the given string."""
  uid_starts_with: String

  """All values not starting with the given string."""
  uid_not_starts_with: String

  """All values ending with the given string."""
  uid_ends_with: String

  """All values not ending with the given string."""
  uid_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  user: UserWhereInput
  doctor: DoctorWhereInput
}

input VerificationCodeWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type AppointmentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'start_time_ASC' |
  'start_time_DESC' |
  'end_time_ASC' |
  'end_time_DESC'

export type AttendingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ChamberOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'start_time_ASC' |
  'start_time_DESC' |
  'end_time_ASC' |
  'end_time_DESC'

export type DoctorOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'specialization_ASC' |
  'specialization_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'emailVerification_ASC' |
  'emailVerification_DESC' |
  'phone_ASC' |
  'phone_DESC' |
  'address_ASC' |
  'address_DESC' |
  'state_ASC' |
  'state_DESC' |
  'zip_ASC' |
  'zip_DESC'

export type HospitalOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'emailVerification_ASC' |
  'emailVerification_DESC' |
  'name_ASC' |
  'name_DESC'

export type LocationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'address_ASC' |
  'address_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'lat_ASC' |
  'lat_DESC' |
  'lng_ASC' |
  'lng_DESC' |
  'addressID_ASC' |
  'addressID_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type PrismaDatabase =   'default'

export type ProfileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'phone_ASC' |
  'phone_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'active_ASC' |
  'active_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'emailVerification_ASC' |
  'emailVerification_DESC' |
  'roles_ASC' |
  'roles_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UserRoles =   'ADMIN' |
  'USER' |
  'STAFF' |
  'DOCTOR' |
  'ATTENDING' |
  'HOSPITAL'

export type VerificationCodeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'uid_ASC' |
  'uid_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export interface AppointmentCreateInput {
  id?: ID_Input | null
  start_time: DateTime
  end_time: DateTime
  chamber?: ChamberCreateOneWithoutAppointmentsInput | null
  hospital?: HospitalCreateOneWithoutAppointmentsInput | null
}

export interface AppointmentCreateManyWithoutChamberInput {
  create?: AppointmentCreateWithoutChamberInput[] | AppointmentCreateWithoutChamberInput | null
  connect?: AppointmentWhereUniqueInput[] | AppointmentWhereUniqueInput | null
}

export interface AppointmentCreateManyWithoutHospitalInput {
  create?: AppointmentCreateWithoutHospitalInput[] | AppointmentCreateWithoutHospitalInput | null
  connect?: AppointmentWhereUniqueInput[] | AppointmentWhereUniqueInput | null
}

export interface AppointmentCreateWithoutChamberInput {
  id?: ID_Input | null
  start_time: DateTime
  end_time: DateTime
  hospital?: HospitalCreateOneWithoutAppointmentsInput | null
}

export interface AppointmentCreateWithoutHospitalInput {
  id?: ID_Input | null
  start_time: DateTime
  end_time: DateTime
  chamber?: ChamberCreateOneWithoutAppointmentsInput | null
}

export interface AppointmentScalarWhereInput {
  AND?: AppointmentScalarWhereInput[] | AppointmentScalarWhereInput | null
  OR?: AppointmentScalarWhereInput[] | AppointmentScalarWhereInput | null
  NOT?: AppointmentScalarWhereInput[] | AppointmentScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  start_time?: DateTime | null
  start_time_not?: DateTime | null
  start_time_in?: DateTime[] | DateTime | null
  start_time_not_in?: DateTime[] | DateTime | null
  start_time_lt?: DateTime | null
  start_time_lte?: DateTime | null
  start_time_gt?: DateTime | null
  start_time_gte?: DateTime | null
  end_time?: DateTime | null
  end_time_not?: DateTime | null
  end_time_in?: DateTime[] | DateTime | null
  end_time_not_in?: DateTime[] | DateTime | null
  end_time_lt?: DateTime | null
  end_time_lte?: DateTime | null
  end_time_gt?: DateTime | null
  end_time_gte?: DateTime | null
}

export interface AppointmentSubscriptionWhereInput {
  AND?: AppointmentSubscriptionWhereInput[] | AppointmentSubscriptionWhereInput | null
  OR?: AppointmentSubscriptionWhereInput[] | AppointmentSubscriptionWhereInput | null
  NOT?: AppointmentSubscriptionWhereInput[] | AppointmentSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: AppointmentWhereInput | null
}

export interface AppointmentUpdateInput {
  start_time?: DateTime | null
  end_time?: DateTime | null
  chamber?: ChamberUpdateOneWithoutAppointmentsInput | null
  hospital?: HospitalUpdateOneWithoutAppointmentsInput | null
}

export interface AppointmentUpdateManyDataInput {
  start_time?: DateTime | null
  end_time?: DateTime | null
}

export interface AppointmentUpdateManyMutationInput {
  start_time?: DateTime | null
  end_time?: DateTime | null
}

export interface AppointmentUpdateManyWithoutChamberInput {
  create?: AppointmentCreateWithoutChamberInput[] | AppointmentCreateWithoutChamberInput | null
  connect?: AppointmentWhereUniqueInput[] | AppointmentWhereUniqueInput | null
  set?: AppointmentWhereUniqueInput[] | AppointmentWhereUniqueInput | null
  disconnect?: AppointmentWhereUniqueInput[] | AppointmentWhereUniqueInput | null
  delete?: AppointmentWhereUniqueInput[] | AppointmentWhereUniqueInput | null
  update?: AppointmentUpdateWithWhereUniqueWithoutChamberInput[] | AppointmentUpdateWithWhereUniqueWithoutChamberInput | null
  updateMany?: AppointmentUpdateManyWithWhereNestedInput[] | AppointmentUpdateManyWithWhereNestedInput | null
  deleteMany?: AppointmentScalarWhereInput[] | AppointmentScalarWhereInput | null
  upsert?: AppointmentUpsertWithWhereUniqueWithoutChamberInput[] | AppointmentUpsertWithWhereUniqueWithoutChamberInput | null
}

export interface AppointmentUpdateManyWithoutHospitalInput {
  create?: AppointmentCreateWithoutHospitalInput[] | AppointmentCreateWithoutHospitalInput | null
  connect?: AppointmentWhereUniqueInput[] | AppointmentWhereUniqueInput | null
  set?: AppointmentWhereUniqueInput[] | AppointmentWhereUniqueInput | null
  disconnect?: AppointmentWhereUniqueInput[] | AppointmentWhereUniqueInput | null
  delete?: AppointmentWhereUniqueInput[] | AppointmentWhereUniqueInput | null
  update?: AppointmentUpdateWithWhereUniqueWithoutHospitalInput[] | AppointmentUpdateWithWhereUniqueWithoutHospitalInput | null
  updateMany?: AppointmentUpdateManyWithWhereNestedInput[] | AppointmentUpdateManyWithWhereNestedInput | null
  deleteMany?: AppointmentScalarWhereInput[] | AppointmentScalarWhereInput | null
  upsert?: AppointmentUpsertWithWhereUniqueWithoutHospitalInput[] | AppointmentUpsertWithWhereUniqueWithoutHospitalInput | null
}

export interface AppointmentUpdateManyWithWhereNestedInput {
  where: AppointmentScalarWhereInput
  data: AppointmentUpdateManyDataInput
}

export interface AppointmentUpdateWithoutChamberDataInput {
  start_time?: DateTime | null
  end_time?: DateTime | null
  hospital?: HospitalUpdateOneWithoutAppointmentsInput | null
}

export interface AppointmentUpdateWithoutHospitalDataInput {
  start_time?: DateTime | null
  end_time?: DateTime | null
  chamber?: ChamberUpdateOneWithoutAppointmentsInput | null
}

export interface AppointmentUpdateWithWhereUniqueWithoutChamberInput {
  where: AppointmentWhereUniqueInput
  data: AppointmentUpdateWithoutChamberDataInput
}

export interface AppointmentUpdateWithWhereUniqueWithoutHospitalInput {
  where: AppointmentWhereUniqueInput
  data: AppointmentUpdateWithoutHospitalDataInput
}

export interface AppointmentUpsertWithWhereUniqueWithoutChamberInput {
  where: AppointmentWhereUniqueInput
  update: AppointmentUpdateWithoutChamberDataInput
  create: AppointmentCreateWithoutChamberInput
}

export interface AppointmentUpsertWithWhereUniqueWithoutHospitalInput {
  where: AppointmentWhereUniqueInput
  update: AppointmentUpdateWithoutHospitalDataInput
  create: AppointmentCreateWithoutHospitalInput
}

export interface AppointmentWhereInput {
  AND?: AppointmentWhereInput[] | AppointmentWhereInput | null
  OR?: AppointmentWhereInput[] | AppointmentWhereInput | null
  NOT?: AppointmentWhereInput[] | AppointmentWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  start_time?: DateTime | null
  start_time_not?: DateTime | null
  start_time_in?: DateTime[] | DateTime | null
  start_time_not_in?: DateTime[] | DateTime | null
  start_time_lt?: DateTime | null
  start_time_lte?: DateTime | null
  start_time_gt?: DateTime | null
  start_time_gte?: DateTime | null
  end_time?: DateTime | null
  end_time_not?: DateTime | null
  end_time_in?: DateTime[] | DateTime | null
  end_time_not_in?: DateTime[] | DateTime | null
  end_time_lt?: DateTime | null
  end_time_lte?: DateTime | null
  end_time_gt?: DateTime | null
  end_time_gte?: DateTime | null
  chamber?: ChamberWhereInput | null
  hospital?: HospitalWhereInput | null
}

export interface AppointmentWhereUniqueInput {
  id?: ID_Input | null
}

export interface AttendingCreateInput {
  id?: ID_Input | null
  doctor?: DoctorCreateOneWithoutAttendingInput | null
  chamber?: ChamberCreateManyWithoutAttendingInput | null
}

export interface AttendingCreateManyWithoutChamberInput {
  create?: AttendingCreateWithoutChamberInput[] | AttendingCreateWithoutChamberInput | null
  connect?: AttendingWhereUniqueInput[] | AttendingWhereUniqueInput | null
}

export interface AttendingCreateManyWithoutDoctorInput {
  create?: AttendingCreateWithoutDoctorInput[] | AttendingCreateWithoutDoctorInput | null
  connect?: AttendingWhereUniqueInput[] | AttendingWhereUniqueInput | null
}

export interface AttendingCreateWithoutChamberInput {
  id?: ID_Input | null
  doctor?: DoctorCreateOneWithoutAttendingInput | null
}

export interface AttendingCreateWithoutDoctorInput {
  id?: ID_Input | null
  chamber?: ChamberCreateManyWithoutAttendingInput | null
}

export interface AttendingScalarWhereInput {
  AND?: AttendingScalarWhereInput[] | AttendingScalarWhereInput | null
  OR?: AttendingScalarWhereInput[] | AttendingScalarWhereInput | null
  NOT?: AttendingScalarWhereInput[] | AttendingScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface AttendingSubscriptionWhereInput {
  AND?: AttendingSubscriptionWhereInput[] | AttendingSubscriptionWhereInput | null
  OR?: AttendingSubscriptionWhereInput[] | AttendingSubscriptionWhereInput | null
  NOT?: AttendingSubscriptionWhereInput[] | AttendingSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: AttendingWhereInput | null
}

export interface AttendingUpdateInput {
  doctor?: DoctorUpdateOneWithoutAttendingInput | null
  chamber?: ChamberUpdateManyWithoutAttendingInput | null
}

export interface AttendingUpdateManyWithoutChamberInput {
  create?: AttendingCreateWithoutChamberInput[] | AttendingCreateWithoutChamberInput | null
  connect?: AttendingWhereUniqueInput[] | AttendingWhereUniqueInput | null
  set?: AttendingWhereUniqueInput[] | AttendingWhereUniqueInput | null
  disconnect?: AttendingWhereUniqueInput[] | AttendingWhereUniqueInput | null
  delete?: AttendingWhereUniqueInput[] | AttendingWhereUniqueInput | null
  update?: AttendingUpdateWithWhereUniqueWithoutChamberInput[] | AttendingUpdateWithWhereUniqueWithoutChamberInput | null
  deleteMany?: AttendingScalarWhereInput[] | AttendingScalarWhereInput | null
  upsert?: AttendingUpsertWithWhereUniqueWithoutChamberInput[] | AttendingUpsertWithWhereUniqueWithoutChamberInput | null
}

export interface AttendingUpdateManyWithoutDoctorInput {
  create?: AttendingCreateWithoutDoctorInput[] | AttendingCreateWithoutDoctorInput | null
  connect?: AttendingWhereUniqueInput[] | AttendingWhereUniqueInput | null
  set?: AttendingWhereUniqueInput[] | AttendingWhereUniqueInput | null
  disconnect?: AttendingWhereUniqueInput[] | AttendingWhereUniqueInput | null
  delete?: AttendingWhereUniqueInput[] | AttendingWhereUniqueInput | null
  update?: AttendingUpdateWithWhereUniqueWithoutDoctorInput[] | AttendingUpdateWithWhereUniqueWithoutDoctorInput | null
  deleteMany?: AttendingScalarWhereInput[] | AttendingScalarWhereInput | null
  upsert?: AttendingUpsertWithWhereUniqueWithoutDoctorInput[] | AttendingUpsertWithWhereUniqueWithoutDoctorInput | null
}

export interface AttendingUpdateWithoutChamberDataInput {
  doctor?: DoctorUpdateOneWithoutAttendingInput | null
}

export interface AttendingUpdateWithoutDoctorDataInput {
  chamber?: ChamberUpdateManyWithoutAttendingInput | null
}

export interface AttendingUpdateWithWhereUniqueWithoutChamberInput {
  where: AttendingWhereUniqueInput
  data: AttendingUpdateWithoutChamberDataInput
}

export interface AttendingUpdateWithWhereUniqueWithoutDoctorInput {
  where: AttendingWhereUniqueInput
  data: AttendingUpdateWithoutDoctorDataInput
}

export interface AttendingUpsertWithWhereUniqueWithoutChamberInput {
  where: AttendingWhereUniqueInput
  update: AttendingUpdateWithoutChamberDataInput
  create: AttendingCreateWithoutChamberInput
}

export interface AttendingUpsertWithWhereUniqueWithoutDoctorInput {
  where: AttendingWhereUniqueInput
  update: AttendingUpdateWithoutDoctorDataInput
  create: AttendingCreateWithoutDoctorInput
}

export interface AttendingWhereInput {
  AND?: AttendingWhereInput[] | AttendingWhereInput | null
  OR?: AttendingWhereInput[] | AttendingWhereInput | null
  NOT?: AttendingWhereInput[] | AttendingWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  doctor?: DoctorWhereInput | null
  chamber_every?: ChamberWhereInput | null
  chamber_some?: ChamberWhereInput | null
  chamber_none?: ChamberWhereInput | null
}

export interface AttendingWhereUniqueInput {
  id?: ID_Input | null
}

export interface ChamberCreateInput {
  id?: ID_Input | null
  name: String
  start_time: DateTime
  end_time: DateTime
  attending?: AttendingCreateManyWithoutChamberInput | null
  appointments?: AppointmentCreateManyWithoutChamberInput | null
  doctor?: DoctorCreateManyWithoutChamberInput | null
  location?: LocationCreateOneWithoutChamberInput | null
}

export interface ChamberCreateManyWithoutAttendingInput {
  create?: ChamberCreateWithoutAttendingInput[] | ChamberCreateWithoutAttendingInput | null
  connect?: ChamberWhereUniqueInput[] | ChamberWhereUniqueInput | null
}

export interface ChamberCreateManyWithoutDoctorInput {
  create?: ChamberCreateWithoutDoctorInput[] | ChamberCreateWithoutDoctorInput | null
  connect?: ChamberWhereUniqueInput[] | ChamberWhereUniqueInput | null
}

export interface ChamberCreateOneWithoutAppointmentsInput {
  create?: ChamberCreateWithoutAppointmentsInput | null
  connect?: ChamberWhereUniqueInput | null
}

export interface ChamberCreateOneWithoutLocationInput {
  create?: ChamberCreateWithoutLocationInput | null
  connect?: ChamberWhereUniqueInput | null
}

export interface ChamberCreateWithoutAppointmentsInput {
  id?: ID_Input | null
  name: String
  start_time: DateTime
  end_time: DateTime
  attending?: AttendingCreateManyWithoutChamberInput | null
  doctor?: DoctorCreateManyWithoutChamberInput | null
  location?: LocationCreateOneWithoutChamberInput | null
}

export interface ChamberCreateWithoutAttendingInput {
  id?: ID_Input | null
  name: String
  start_time: DateTime
  end_time: DateTime
  appointments?: AppointmentCreateManyWithoutChamberInput | null
  doctor?: DoctorCreateManyWithoutChamberInput | null
  location?: LocationCreateOneWithoutChamberInput | null
}

export interface ChamberCreateWithoutDoctorInput {
  id?: ID_Input | null
  name: String
  start_time: DateTime
  end_time: DateTime
  attending?: AttendingCreateManyWithoutChamberInput | null
  appointments?: AppointmentCreateManyWithoutChamberInput | null
  location?: LocationCreateOneWithoutChamberInput | null
}

export interface ChamberCreateWithoutLocationInput {
  id?: ID_Input | null
  name: String
  start_time: DateTime
  end_time: DateTime
  attending?: AttendingCreateManyWithoutChamberInput | null
  appointments?: AppointmentCreateManyWithoutChamberInput | null
  doctor?: DoctorCreateManyWithoutChamberInput | null
}

export interface ChamberScalarWhereInput {
  AND?: ChamberScalarWhereInput[] | ChamberScalarWhereInput | null
  OR?: ChamberScalarWhereInput[] | ChamberScalarWhereInput | null
  NOT?: ChamberScalarWhereInput[] | ChamberScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  start_time?: DateTime | null
  start_time_not?: DateTime | null
  start_time_in?: DateTime[] | DateTime | null
  start_time_not_in?: DateTime[] | DateTime | null
  start_time_lt?: DateTime | null
  start_time_lte?: DateTime | null
  start_time_gt?: DateTime | null
  start_time_gte?: DateTime | null
  end_time?: DateTime | null
  end_time_not?: DateTime | null
  end_time_in?: DateTime[] | DateTime | null
  end_time_not_in?: DateTime[] | DateTime | null
  end_time_lt?: DateTime | null
  end_time_lte?: DateTime | null
  end_time_gt?: DateTime | null
  end_time_gte?: DateTime | null
}

export interface ChamberSubscriptionWhereInput {
  AND?: ChamberSubscriptionWhereInput[] | ChamberSubscriptionWhereInput | null
  OR?: ChamberSubscriptionWhereInput[] | ChamberSubscriptionWhereInput | null
  NOT?: ChamberSubscriptionWhereInput[] | ChamberSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ChamberWhereInput | null
}

export interface ChamberUpdateInput {
  name?: String | null
  start_time?: DateTime | null
  end_time?: DateTime | null
  attending?: AttendingUpdateManyWithoutChamberInput | null
  appointments?: AppointmentUpdateManyWithoutChamberInput | null
  doctor?: DoctorUpdateManyWithoutChamberInput | null
  location?: LocationUpdateOneWithoutChamberInput | null
}

export interface ChamberUpdateManyDataInput {
  name?: String | null
  start_time?: DateTime | null
  end_time?: DateTime | null
}

export interface ChamberUpdateManyMutationInput {
  name?: String | null
  start_time?: DateTime | null
  end_time?: DateTime | null
}

export interface ChamberUpdateManyWithoutAttendingInput {
  create?: ChamberCreateWithoutAttendingInput[] | ChamberCreateWithoutAttendingInput | null
  connect?: ChamberWhereUniqueInput[] | ChamberWhereUniqueInput | null
  set?: ChamberWhereUniqueInput[] | ChamberWhereUniqueInput | null
  disconnect?: ChamberWhereUniqueInput[] | ChamberWhereUniqueInput | null
  delete?: ChamberWhereUniqueInput[] | ChamberWhereUniqueInput | null
  update?: ChamberUpdateWithWhereUniqueWithoutAttendingInput[] | ChamberUpdateWithWhereUniqueWithoutAttendingInput | null
  updateMany?: ChamberUpdateManyWithWhereNestedInput[] | ChamberUpdateManyWithWhereNestedInput | null
  deleteMany?: ChamberScalarWhereInput[] | ChamberScalarWhereInput | null
  upsert?: ChamberUpsertWithWhereUniqueWithoutAttendingInput[] | ChamberUpsertWithWhereUniqueWithoutAttendingInput | null
}

export interface ChamberUpdateManyWithoutDoctorInput {
  create?: ChamberCreateWithoutDoctorInput[] | ChamberCreateWithoutDoctorInput | null
  connect?: ChamberWhereUniqueInput[] | ChamberWhereUniqueInput | null
  set?: ChamberWhereUniqueInput[] | ChamberWhereUniqueInput | null
  disconnect?: ChamberWhereUniqueInput[] | ChamberWhereUniqueInput | null
  delete?: ChamberWhereUniqueInput[] | ChamberWhereUniqueInput | null
  update?: ChamberUpdateWithWhereUniqueWithoutDoctorInput[] | ChamberUpdateWithWhereUniqueWithoutDoctorInput | null
  updateMany?: ChamberUpdateManyWithWhereNestedInput[] | ChamberUpdateManyWithWhereNestedInput | null
  deleteMany?: ChamberScalarWhereInput[] | ChamberScalarWhereInput | null
  upsert?: ChamberUpsertWithWhereUniqueWithoutDoctorInput[] | ChamberUpsertWithWhereUniqueWithoutDoctorInput | null
}

export interface ChamberUpdateManyWithWhereNestedInput {
  where: ChamberScalarWhereInput
  data: ChamberUpdateManyDataInput
}

export interface ChamberUpdateOneWithoutAppointmentsInput {
  create?: ChamberCreateWithoutAppointmentsInput | null
  connect?: ChamberWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: ChamberUpdateWithoutAppointmentsDataInput | null
  upsert?: ChamberUpsertWithoutAppointmentsInput | null
}

export interface ChamberUpdateOneWithoutLocationInput {
  create?: ChamberCreateWithoutLocationInput | null
  connect?: ChamberWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: ChamberUpdateWithoutLocationDataInput | null
  upsert?: ChamberUpsertWithoutLocationInput | null
}

export interface ChamberUpdateWithoutAppointmentsDataInput {
  name?: String | null
  start_time?: DateTime | null
  end_time?: DateTime | null
  attending?: AttendingUpdateManyWithoutChamberInput | null
  doctor?: DoctorUpdateManyWithoutChamberInput | null
  location?: LocationUpdateOneWithoutChamberInput | null
}

export interface ChamberUpdateWithoutAttendingDataInput {
  name?: String | null
  start_time?: DateTime | null
  end_time?: DateTime | null
  appointments?: AppointmentUpdateManyWithoutChamberInput | null
  doctor?: DoctorUpdateManyWithoutChamberInput | null
  location?: LocationUpdateOneWithoutChamberInput | null
}

export interface ChamberUpdateWithoutDoctorDataInput {
  name?: String | null
  start_time?: DateTime | null
  end_time?: DateTime | null
  attending?: AttendingUpdateManyWithoutChamberInput | null
  appointments?: AppointmentUpdateManyWithoutChamberInput | null
  location?: LocationUpdateOneWithoutChamberInput | null
}

export interface ChamberUpdateWithoutLocationDataInput {
  name?: String | null
  start_time?: DateTime | null
  end_time?: DateTime | null
  attending?: AttendingUpdateManyWithoutChamberInput | null
  appointments?: AppointmentUpdateManyWithoutChamberInput | null
  doctor?: DoctorUpdateManyWithoutChamberInput | null
}

export interface ChamberUpdateWithWhereUniqueWithoutAttendingInput {
  where: ChamberWhereUniqueInput
  data: ChamberUpdateWithoutAttendingDataInput
}

export interface ChamberUpdateWithWhereUniqueWithoutDoctorInput {
  where: ChamberWhereUniqueInput
  data: ChamberUpdateWithoutDoctorDataInput
}

export interface ChamberUpsertWithoutAppointmentsInput {
  update: ChamberUpdateWithoutAppointmentsDataInput
  create: ChamberCreateWithoutAppointmentsInput
}

export interface ChamberUpsertWithoutLocationInput {
  update: ChamberUpdateWithoutLocationDataInput
  create: ChamberCreateWithoutLocationInput
}

export interface ChamberUpsertWithWhereUniqueWithoutAttendingInput {
  where: ChamberWhereUniqueInput
  update: ChamberUpdateWithoutAttendingDataInput
  create: ChamberCreateWithoutAttendingInput
}

export interface ChamberUpsertWithWhereUniqueWithoutDoctorInput {
  where: ChamberWhereUniqueInput
  update: ChamberUpdateWithoutDoctorDataInput
  create: ChamberCreateWithoutDoctorInput
}

export interface ChamberWhereInput {
  AND?: ChamberWhereInput[] | ChamberWhereInput | null
  OR?: ChamberWhereInput[] | ChamberWhereInput | null
  NOT?: ChamberWhereInput[] | ChamberWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  start_time?: DateTime | null
  start_time_not?: DateTime | null
  start_time_in?: DateTime[] | DateTime | null
  start_time_not_in?: DateTime[] | DateTime | null
  start_time_lt?: DateTime | null
  start_time_lte?: DateTime | null
  start_time_gt?: DateTime | null
  start_time_gte?: DateTime | null
  end_time?: DateTime | null
  end_time_not?: DateTime | null
  end_time_in?: DateTime[] | DateTime | null
  end_time_not_in?: DateTime[] | DateTime | null
  end_time_lt?: DateTime | null
  end_time_lte?: DateTime | null
  end_time_gt?: DateTime | null
  end_time_gte?: DateTime | null
  attending_every?: AttendingWhereInput | null
  attending_some?: AttendingWhereInput | null
  attending_none?: AttendingWhereInput | null
  appointments_every?: AppointmentWhereInput | null
  appointments_some?: AppointmentWhereInput | null
  appointments_none?: AppointmentWhereInput | null
  doctor_every?: DoctorWhereInput | null
  doctor_some?: DoctorWhereInput | null
  doctor_none?: DoctorWhereInput | null
  location?: LocationWhereInput | null
}

export interface ChamberWhereUniqueInput {
  id?: ID_Input | null
}

export interface DoctorCreateInput {
  id?: ID_Input | null
  name: String
  specialization: String
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
  user: UserCreateOneWithoutDoctorInput
  attending?: AttendingCreateManyWithoutDoctorInput | null
  chamber?: ChamberCreateManyWithoutDoctorInput | null
  verifac?: VerificationCodeCreateOneWithoutDoctorInput | null
  profile?: ProfileCreateOneWithoutDoctorInput | null
}

export interface DoctorCreateManyWithoutChamberInput {
  create?: DoctorCreateWithoutChamberInput[] | DoctorCreateWithoutChamberInput | null
  connect?: DoctorWhereUniqueInput[] | DoctorWhereUniqueInput | null
}

export interface DoctorCreateOneWithoutAttendingInput {
  create?: DoctorCreateWithoutAttendingInput | null
  connect?: DoctorWhereUniqueInput | null
}

export interface DoctorCreateOneWithoutProfileInput {
  create?: DoctorCreateWithoutProfileInput | null
  connect?: DoctorWhereUniqueInput | null
}

export interface DoctorCreateOneWithoutUserInput {
  create?: DoctorCreateWithoutUserInput | null
  connect?: DoctorWhereUniqueInput | null
}

export interface DoctorCreateOneWithoutVerifacInput {
  create?: DoctorCreateWithoutVerifacInput | null
  connect?: DoctorWhereUniqueInput | null
}

export interface DoctorCreateWithoutAttendingInput {
  id?: ID_Input | null
  name: String
  specialization: String
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
  user: UserCreateOneWithoutDoctorInput
  chamber?: ChamberCreateManyWithoutDoctorInput | null
  verifac?: VerificationCodeCreateOneWithoutDoctorInput | null
  profile?: ProfileCreateOneWithoutDoctorInput | null
}

export interface DoctorCreateWithoutChamberInput {
  id?: ID_Input | null
  name: String
  specialization: String
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
  user: UserCreateOneWithoutDoctorInput
  attending?: AttendingCreateManyWithoutDoctorInput | null
  verifac?: VerificationCodeCreateOneWithoutDoctorInput | null
  profile?: ProfileCreateOneWithoutDoctorInput | null
}

export interface DoctorCreateWithoutProfileInput {
  id?: ID_Input | null
  name: String
  specialization: String
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
  user: UserCreateOneWithoutDoctorInput
  attending?: AttendingCreateManyWithoutDoctorInput | null
  chamber?: ChamberCreateManyWithoutDoctorInput | null
  verifac?: VerificationCodeCreateOneWithoutDoctorInput | null
}

export interface DoctorCreateWithoutUserInput {
  id?: ID_Input | null
  name: String
  specialization: String
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
  attending?: AttendingCreateManyWithoutDoctorInput | null
  chamber?: ChamberCreateManyWithoutDoctorInput | null
  verifac?: VerificationCodeCreateOneWithoutDoctorInput | null
  profile?: ProfileCreateOneWithoutDoctorInput | null
}

export interface DoctorCreateWithoutVerifacInput {
  id?: ID_Input | null
  name: String
  specialization: String
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
  user: UserCreateOneWithoutDoctorInput
  attending?: AttendingCreateManyWithoutDoctorInput | null
  chamber?: ChamberCreateManyWithoutDoctorInput | null
  profile?: ProfileCreateOneWithoutDoctorInput | null
}

export interface DoctorScalarWhereInput {
  AND?: DoctorScalarWhereInput[] | DoctorScalarWhereInput | null
  OR?: DoctorScalarWhereInput[] | DoctorScalarWhereInput | null
  NOT?: DoctorScalarWhereInput[] | DoctorScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  specialization?: String | null
  specialization_not?: String | null
  specialization_in?: String[] | String | null
  specialization_not_in?: String[] | String | null
  specialization_lt?: String | null
  specialization_lte?: String | null
  specialization_gt?: String | null
  specialization_gte?: String | null
  specialization_contains?: String | null
  specialization_not_contains?: String | null
  specialization_starts_with?: String | null
  specialization_not_starts_with?: String | null
  specialization_ends_with?: String | null
  specialization_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  emailVerification?: Boolean | null
  emailVerification_not?: Boolean | null
  phone?: String | null
  phone_not?: String | null
  phone_in?: String[] | String | null
  phone_not_in?: String[] | String | null
  phone_lt?: String | null
  phone_lte?: String | null
  phone_gt?: String | null
  phone_gte?: String | null
  phone_contains?: String | null
  phone_not_contains?: String | null
  phone_starts_with?: String | null
  phone_not_starts_with?: String | null
  phone_ends_with?: String | null
  phone_not_ends_with?: String | null
  address?: String | null
  address_not?: String | null
  address_in?: String[] | String | null
  address_not_in?: String[] | String | null
  address_lt?: String | null
  address_lte?: String | null
  address_gt?: String | null
  address_gte?: String | null
  address_contains?: String | null
  address_not_contains?: String | null
  address_starts_with?: String | null
  address_not_starts_with?: String | null
  address_ends_with?: String | null
  address_not_ends_with?: String | null
  state?: String | null
  state_not?: String | null
  state_in?: String[] | String | null
  state_not_in?: String[] | String | null
  state_lt?: String | null
  state_lte?: String | null
  state_gt?: String | null
  state_gte?: String | null
  state_contains?: String | null
  state_not_contains?: String | null
  state_starts_with?: String | null
  state_not_starts_with?: String | null
  state_ends_with?: String | null
  state_not_ends_with?: String | null
  zip?: String | null
  zip_not?: String | null
  zip_in?: String[] | String | null
  zip_not_in?: String[] | String | null
  zip_lt?: String | null
  zip_lte?: String | null
  zip_gt?: String | null
  zip_gte?: String | null
  zip_contains?: String | null
  zip_not_contains?: String | null
  zip_starts_with?: String | null
  zip_not_starts_with?: String | null
  zip_ends_with?: String | null
  zip_not_ends_with?: String | null
}

export interface DoctorSubscriptionWhereInput {
  AND?: DoctorSubscriptionWhereInput[] | DoctorSubscriptionWhereInput | null
  OR?: DoctorSubscriptionWhereInput[] | DoctorSubscriptionWhereInput | null
  NOT?: DoctorSubscriptionWhereInput[] | DoctorSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: DoctorWhereInput | null
}

export interface DoctorUpdateInput {
  name?: String | null
  specialization?: String | null
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
  user?: UserUpdateOneRequiredWithoutDoctorInput | null
  attending?: AttendingUpdateManyWithoutDoctorInput | null
  chamber?: ChamberUpdateManyWithoutDoctorInput | null
  verifac?: VerificationCodeUpdateOneWithoutDoctorInput | null
  profile?: ProfileUpdateOneWithoutDoctorInput | null
}

export interface DoctorUpdateManyDataInput {
  name?: String | null
  specialization?: String | null
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
}

export interface DoctorUpdateManyMutationInput {
  name?: String | null
  specialization?: String | null
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
}

export interface DoctorUpdateManyWithoutChamberInput {
  create?: DoctorCreateWithoutChamberInput[] | DoctorCreateWithoutChamberInput | null
  connect?: DoctorWhereUniqueInput[] | DoctorWhereUniqueInput | null
  set?: DoctorWhereUniqueInput[] | DoctorWhereUniqueInput | null
  disconnect?: DoctorWhereUniqueInput[] | DoctorWhereUniqueInput | null
  delete?: DoctorWhereUniqueInput[] | DoctorWhereUniqueInput | null
  update?: DoctorUpdateWithWhereUniqueWithoutChamberInput[] | DoctorUpdateWithWhereUniqueWithoutChamberInput | null
  updateMany?: DoctorUpdateManyWithWhereNestedInput[] | DoctorUpdateManyWithWhereNestedInput | null
  deleteMany?: DoctorScalarWhereInput[] | DoctorScalarWhereInput | null
  upsert?: DoctorUpsertWithWhereUniqueWithoutChamberInput[] | DoctorUpsertWithWhereUniqueWithoutChamberInput | null
}

export interface DoctorUpdateManyWithWhereNestedInput {
  where: DoctorScalarWhereInput
  data: DoctorUpdateManyDataInput
}

export interface DoctorUpdateOneWithoutAttendingInput {
  create?: DoctorCreateWithoutAttendingInput | null
  connect?: DoctorWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: DoctorUpdateWithoutAttendingDataInput | null
  upsert?: DoctorUpsertWithoutAttendingInput | null
}

export interface DoctorUpdateOneWithoutProfileInput {
  create?: DoctorCreateWithoutProfileInput | null
  connect?: DoctorWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: DoctorUpdateWithoutProfileDataInput | null
  upsert?: DoctorUpsertWithoutProfileInput | null
}

export interface DoctorUpdateOneWithoutUserInput {
  create?: DoctorCreateWithoutUserInput | null
  connect?: DoctorWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: DoctorUpdateWithoutUserDataInput | null
  upsert?: DoctorUpsertWithoutUserInput | null
}

export interface DoctorUpdateOneWithoutVerifacInput {
  create?: DoctorCreateWithoutVerifacInput | null
  connect?: DoctorWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: DoctorUpdateWithoutVerifacDataInput | null
  upsert?: DoctorUpsertWithoutVerifacInput | null
}

export interface DoctorUpdateWithoutAttendingDataInput {
  name?: String | null
  specialization?: String | null
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
  user?: UserUpdateOneRequiredWithoutDoctorInput | null
  chamber?: ChamberUpdateManyWithoutDoctorInput | null
  verifac?: VerificationCodeUpdateOneWithoutDoctorInput | null
  profile?: ProfileUpdateOneWithoutDoctorInput | null
}

export interface DoctorUpdateWithoutChamberDataInput {
  name?: String | null
  specialization?: String | null
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
  user?: UserUpdateOneRequiredWithoutDoctorInput | null
  attending?: AttendingUpdateManyWithoutDoctorInput | null
  verifac?: VerificationCodeUpdateOneWithoutDoctorInput | null
  profile?: ProfileUpdateOneWithoutDoctorInput | null
}

export interface DoctorUpdateWithoutProfileDataInput {
  name?: String | null
  specialization?: String | null
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
  user?: UserUpdateOneRequiredWithoutDoctorInput | null
  attending?: AttendingUpdateManyWithoutDoctorInput | null
  chamber?: ChamberUpdateManyWithoutDoctorInput | null
  verifac?: VerificationCodeUpdateOneWithoutDoctorInput | null
}

export interface DoctorUpdateWithoutUserDataInput {
  name?: String | null
  specialization?: String | null
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
  attending?: AttendingUpdateManyWithoutDoctorInput | null
  chamber?: ChamberUpdateManyWithoutDoctorInput | null
  verifac?: VerificationCodeUpdateOneWithoutDoctorInput | null
  profile?: ProfileUpdateOneWithoutDoctorInput | null
}

export interface DoctorUpdateWithoutVerifacDataInput {
  name?: String | null
  specialization?: String | null
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
  user?: UserUpdateOneRequiredWithoutDoctorInput | null
  attending?: AttendingUpdateManyWithoutDoctorInput | null
  chamber?: ChamberUpdateManyWithoutDoctorInput | null
  profile?: ProfileUpdateOneWithoutDoctorInput | null
}

export interface DoctorUpdateWithWhereUniqueWithoutChamberInput {
  where: DoctorWhereUniqueInput
  data: DoctorUpdateWithoutChamberDataInput
}

export interface DoctorUpsertWithoutAttendingInput {
  update: DoctorUpdateWithoutAttendingDataInput
  create: DoctorCreateWithoutAttendingInput
}

export interface DoctorUpsertWithoutProfileInput {
  update: DoctorUpdateWithoutProfileDataInput
  create: DoctorCreateWithoutProfileInput
}

export interface DoctorUpsertWithoutUserInput {
  update: DoctorUpdateWithoutUserDataInput
  create: DoctorCreateWithoutUserInput
}

export interface DoctorUpsertWithoutVerifacInput {
  update: DoctorUpdateWithoutVerifacDataInput
  create: DoctorCreateWithoutVerifacInput
}

export interface DoctorUpsertWithWhereUniqueWithoutChamberInput {
  where: DoctorWhereUniqueInput
  update: DoctorUpdateWithoutChamberDataInput
  create: DoctorCreateWithoutChamberInput
}

export interface DoctorWhereInput {
  AND?: DoctorWhereInput[] | DoctorWhereInput | null
  OR?: DoctorWhereInput[] | DoctorWhereInput | null
  NOT?: DoctorWhereInput[] | DoctorWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  specialization?: String | null
  specialization_not?: String | null
  specialization_in?: String[] | String | null
  specialization_not_in?: String[] | String | null
  specialization_lt?: String | null
  specialization_lte?: String | null
  specialization_gt?: String | null
  specialization_gte?: String | null
  specialization_contains?: String | null
  specialization_not_contains?: String | null
  specialization_starts_with?: String | null
  specialization_not_starts_with?: String | null
  specialization_ends_with?: String | null
  specialization_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  emailVerification?: Boolean | null
  emailVerification_not?: Boolean | null
  phone?: String | null
  phone_not?: String | null
  phone_in?: String[] | String | null
  phone_not_in?: String[] | String | null
  phone_lt?: String | null
  phone_lte?: String | null
  phone_gt?: String | null
  phone_gte?: String | null
  phone_contains?: String | null
  phone_not_contains?: String | null
  phone_starts_with?: String | null
  phone_not_starts_with?: String | null
  phone_ends_with?: String | null
  phone_not_ends_with?: String | null
  address?: String | null
  address_not?: String | null
  address_in?: String[] | String | null
  address_not_in?: String[] | String | null
  address_lt?: String | null
  address_lte?: String | null
  address_gt?: String | null
  address_gte?: String | null
  address_contains?: String | null
  address_not_contains?: String | null
  address_starts_with?: String | null
  address_not_starts_with?: String | null
  address_ends_with?: String | null
  address_not_ends_with?: String | null
  state?: String | null
  state_not?: String | null
  state_in?: String[] | String | null
  state_not_in?: String[] | String | null
  state_lt?: String | null
  state_lte?: String | null
  state_gt?: String | null
  state_gte?: String | null
  state_contains?: String | null
  state_not_contains?: String | null
  state_starts_with?: String | null
  state_not_starts_with?: String | null
  state_ends_with?: String | null
  state_not_ends_with?: String | null
  zip?: String | null
  zip_not?: String | null
  zip_in?: String[] | String | null
  zip_not_in?: String[] | String | null
  zip_lt?: String | null
  zip_lte?: String | null
  zip_gt?: String | null
  zip_gte?: String | null
  zip_contains?: String | null
  zip_not_contains?: String | null
  zip_starts_with?: String | null
  zip_not_starts_with?: String | null
  zip_ends_with?: String | null
  zip_not_ends_with?: String | null
  user?: UserWhereInput | null
  attending_every?: AttendingWhereInput | null
  attending_some?: AttendingWhereInput | null
  attending_none?: AttendingWhereInput | null
  chamber_every?: ChamberWhereInput | null
  chamber_some?: ChamberWhereInput | null
  chamber_none?: ChamberWhereInput | null
  verifac?: VerificationCodeWhereInput | null
  profile?: ProfileWhereInput | null
}

export interface DoctorWhereUniqueInput {
  id?: ID_Input | null
}

export interface HospitalCreateInput {
  id?: ID_Input | null
  emailVerification?: Boolean | null
  name: String
  profile: ProfileCreateOneWithoutHospitalInput
  controllers?: UserCreateManyWithoutHospitalInput | null
  appointments?: AppointmentCreateManyWithoutHospitalInput | null
  location?: LocationCreateOneWithoutHospitalInput | null
}

export interface HospitalCreateOneWithoutAppointmentsInput {
  create?: HospitalCreateWithoutAppointmentsInput | null
  connect?: HospitalWhereUniqueInput | null
}

export interface HospitalCreateOneWithoutControllersInput {
  create?: HospitalCreateWithoutControllersInput | null
  connect?: HospitalWhereUniqueInput | null
}

export interface HospitalCreateOneWithoutLocationInput {
  create?: HospitalCreateWithoutLocationInput | null
  connect?: HospitalWhereUniqueInput | null
}

export interface HospitalCreateOneWithoutProfileInput {
  create?: HospitalCreateWithoutProfileInput | null
  connect?: HospitalWhereUniqueInput | null
}

export interface HospitalCreateWithoutAppointmentsInput {
  id?: ID_Input | null
  emailVerification?: Boolean | null
  name: String
  profile: ProfileCreateOneWithoutHospitalInput
  controllers?: UserCreateManyWithoutHospitalInput | null
  location?: LocationCreateOneWithoutHospitalInput | null
}

export interface HospitalCreateWithoutControllersInput {
  id?: ID_Input | null
  emailVerification?: Boolean | null
  name: String
  profile: ProfileCreateOneWithoutHospitalInput
  appointments?: AppointmentCreateManyWithoutHospitalInput | null
  location?: LocationCreateOneWithoutHospitalInput | null
}

export interface HospitalCreateWithoutLocationInput {
  id?: ID_Input | null
  emailVerification?: Boolean | null
  name: String
  profile: ProfileCreateOneWithoutHospitalInput
  controllers?: UserCreateManyWithoutHospitalInput | null
  appointments?: AppointmentCreateManyWithoutHospitalInput | null
}

export interface HospitalCreateWithoutProfileInput {
  id?: ID_Input | null
  emailVerification?: Boolean | null
  name: String
  controllers?: UserCreateManyWithoutHospitalInput | null
  appointments?: AppointmentCreateManyWithoutHospitalInput | null
  location?: LocationCreateOneWithoutHospitalInput | null
}

export interface HospitalSubscriptionWhereInput {
  AND?: HospitalSubscriptionWhereInput[] | HospitalSubscriptionWhereInput | null
  OR?: HospitalSubscriptionWhereInput[] | HospitalSubscriptionWhereInput | null
  NOT?: HospitalSubscriptionWhereInput[] | HospitalSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: HospitalWhereInput | null
}

export interface HospitalUpdateInput {
  emailVerification?: Boolean | null
  name?: String | null
  profile?: ProfileUpdateOneRequiredWithoutHospitalInput | null
  controllers?: UserUpdateManyWithoutHospitalInput | null
  appointments?: AppointmentUpdateManyWithoutHospitalInput | null
  location?: LocationUpdateOneWithoutHospitalInput | null
}

export interface HospitalUpdateManyMutationInput {
  emailVerification?: Boolean | null
  name?: String | null
}

export interface HospitalUpdateOneWithoutAppointmentsInput {
  create?: HospitalCreateWithoutAppointmentsInput | null
  connect?: HospitalWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: HospitalUpdateWithoutAppointmentsDataInput | null
  upsert?: HospitalUpsertWithoutAppointmentsInput | null
}

export interface HospitalUpdateOneWithoutControllersInput {
  create?: HospitalCreateWithoutControllersInput | null
  connect?: HospitalWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: HospitalUpdateWithoutControllersDataInput | null
  upsert?: HospitalUpsertWithoutControllersInput | null
}

export interface HospitalUpdateOneWithoutLocationInput {
  create?: HospitalCreateWithoutLocationInput | null
  connect?: HospitalWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: HospitalUpdateWithoutLocationDataInput | null
  upsert?: HospitalUpsertWithoutLocationInput | null
}

export interface HospitalUpdateOneWithoutProfileInput {
  create?: HospitalCreateWithoutProfileInput | null
  connect?: HospitalWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: HospitalUpdateWithoutProfileDataInput | null
  upsert?: HospitalUpsertWithoutProfileInput | null
}

export interface HospitalUpdateWithoutAppointmentsDataInput {
  emailVerification?: Boolean | null
  name?: String | null
  profile?: ProfileUpdateOneRequiredWithoutHospitalInput | null
  controllers?: UserUpdateManyWithoutHospitalInput | null
  location?: LocationUpdateOneWithoutHospitalInput | null
}

export interface HospitalUpdateWithoutControllersDataInput {
  emailVerification?: Boolean | null
  name?: String | null
  profile?: ProfileUpdateOneRequiredWithoutHospitalInput | null
  appointments?: AppointmentUpdateManyWithoutHospitalInput | null
  location?: LocationUpdateOneWithoutHospitalInput | null
}

export interface HospitalUpdateWithoutLocationDataInput {
  emailVerification?: Boolean | null
  name?: String | null
  profile?: ProfileUpdateOneRequiredWithoutHospitalInput | null
  controllers?: UserUpdateManyWithoutHospitalInput | null
  appointments?: AppointmentUpdateManyWithoutHospitalInput | null
}

export interface HospitalUpdateWithoutProfileDataInput {
  emailVerification?: Boolean | null
  name?: String | null
  controllers?: UserUpdateManyWithoutHospitalInput | null
  appointments?: AppointmentUpdateManyWithoutHospitalInput | null
  location?: LocationUpdateOneWithoutHospitalInput | null
}

export interface HospitalUpsertWithoutAppointmentsInput {
  update: HospitalUpdateWithoutAppointmentsDataInput
  create: HospitalCreateWithoutAppointmentsInput
}

export interface HospitalUpsertWithoutControllersInput {
  update: HospitalUpdateWithoutControllersDataInput
  create: HospitalCreateWithoutControllersInput
}

export interface HospitalUpsertWithoutLocationInput {
  update: HospitalUpdateWithoutLocationDataInput
  create: HospitalCreateWithoutLocationInput
}

export interface HospitalUpsertWithoutProfileInput {
  update: HospitalUpdateWithoutProfileDataInput
  create: HospitalCreateWithoutProfileInput
}

export interface HospitalWhereInput {
  AND?: HospitalWhereInput[] | HospitalWhereInput | null
  OR?: HospitalWhereInput[] | HospitalWhereInput | null
  NOT?: HospitalWhereInput[] | HospitalWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  emailVerification?: Boolean | null
  emailVerification_not?: Boolean | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  profile?: ProfileWhereInput | null
  controllers_every?: UserWhereInput | null
  controllers_some?: UserWhereInput | null
  controllers_none?: UserWhereInput | null
  appointments_every?: AppointmentWhereInput | null
  appointments_some?: AppointmentWhereInput | null
  appointments_none?: AppointmentWhereInput | null
  location?: LocationWhereInput | null
}

export interface HospitalWhereUniqueInput {
  id?: ID_Input | null
}

export interface LocationCreateInput {
  id?: ID_Input | null
  address?: String | null
  slug?: String | null
  lat?: String | null
  lng?: String | null
  addressID?: String | null
  hospital?: HospitalCreateOneWithoutLocationInput | null
  chamber?: ChamberCreateOneWithoutLocationInput | null
}

export interface LocationCreateOneWithoutChamberInput {
  create?: LocationCreateWithoutChamberInput | null
  connect?: LocationWhereUniqueInput | null
}

export interface LocationCreateOneWithoutHospitalInput {
  create?: LocationCreateWithoutHospitalInput | null
  connect?: LocationWhereUniqueInput | null
}

export interface LocationCreateWithoutChamberInput {
  id?: ID_Input | null
  address?: String | null
  slug?: String | null
  lat?: String | null
  lng?: String | null
  addressID?: String | null
  hospital?: HospitalCreateOneWithoutLocationInput | null
}

export interface LocationCreateWithoutHospitalInput {
  id?: ID_Input | null
  address?: String | null
  slug?: String | null
  lat?: String | null
  lng?: String | null
  addressID?: String | null
  chamber?: ChamberCreateOneWithoutLocationInput | null
}

export interface LocationSubscriptionWhereInput {
  AND?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null
  OR?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null
  NOT?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LocationWhereInput | null
}

export interface LocationUpdateInput {
  address?: String | null
  slug?: String | null
  lat?: String | null
  lng?: String | null
  addressID?: String | null
  hospital?: HospitalUpdateOneWithoutLocationInput | null
  chamber?: ChamberUpdateOneWithoutLocationInput | null
}

export interface LocationUpdateManyMutationInput {
  address?: String | null
  slug?: String | null
  lat?: String | null
  lng?: String | null
  addressID?: String | null
}

export interface LocationUpdateOneWithoutChamberInput {
  create?: LocationCreateWithoutChamberInput | null
  connect?: LocationWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: LocationUpdateWithoutChamberDataInput | null
  upsert?: LocationUpsertWithoutChamberInput | null
}

export interface LocationUpdateOneWithoutHospitalInput {
  create?: LocationCreateWithoutHospitalInput | null
  connect?: LocationWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: LocationUpdateWithoutHospitalDataInput | null
  upsert?: LocationUpsertWithoutHospitalInput | null
}

export interface LocationUpdateWithoutChamberDataInput {
  address?: String | null
  slug?: String | null
  lat?: String | null
  lng?: String | null
  addressID?: String | null
  hospital?: HospitalUpdateOneWithoutLocationInput | null
}

export interface LocationUpdateWithoutHospitalDataInput {
  address?: String | null
  slug?: String | null
  lat?: String | null
  lng?: String | null
  addressID?: String | null
  chamber?: ChamberUpdateOneWithoutLocationInput | null
}

export interface LocationUpsertWithoutChamberInput {
  update: LocationUpdateWithoutChamberDataInput
  create: LocationCreateWithoutChamberInput
}

export interface LocationUpsertWithoutHospitalInput {
  update: LocationUpdateWithoutHospitalDataInput
  create: LocationCreateWithoutHospitalInput
}

export interface LocationWhereInput {
  AND?: LocationWhereInput[] | LocationWhereInput | null
  OR?: LocationWhereInput[] | LocationWhereInput | null
  NOT?: LocationWhereInput[] | LocationWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  address?: String | null
  address_not?: String | null
  address_in?: String[] | String | null
  address_not_in?: String[] | String | null
  address_lt?: String | null
  address_lte?: String | null
  address_gt?: String | null
  address_gte?: String | null
  address_contains?: String | null
  address_not_contains?: String | null
  address_starts_with?: String | null
  address_not_starts_with?: String | null
  address_ends_with?: String | null
  address_not_ends_with?: String | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  lat?: String | null
  lat_not?: String | null
  lat_in?: String[] | String | null
  lat_not_in?: String[] | String | null
  lat_lt?: String | null
  lat_lte?: String | null
  lat_gt?: String | null
  lat_gte?: String | null
  lat_contains?: String | null
  lat_not_contains?: String | null
  lat_starts_with?: String | null
  lat_not_starts_with?: String | null
  lat_ends_with?: String | null
  lat_not_ends_with?: String | null
  lng?: String | null
  lng_not?: String | null
  lng_in?: String[] | String | null
  lng_not_in?: String[] | String | null
  lng_lt?: String | null
  lng_lte?: String | null
  lng_gt?: String | null
  lng_gte?: String | null
  lng_contains?: String | null
  lng_not_contains?: String | null
  lng_starts_with?: String | null
  lng_not_starts_with?: String | null
  lng_ends_with?: String | null
  lng_not_ends_with?: String | null
  addressID?: String | null
  addressID_not?: String | null
  addressID_in?: String[] | String | null
  addressID_not_in?: String[] | String | null
  addressID_lt?: String | null
  addressID_lte?: String | null
  addressID_gt?: String | null
  addressID_gte?: String | null
  addressID_contains?: String | null
  addressID_not_contains?: String | null
  addressID_starts_with?: String | null
  addressID_not_starts_with?: String | null
  addressID_ends_with?: String | null
  addressID_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  hospital?: HospitalWhereInput | null
  chamber?: ChamberWhereInput | null
}

export interface LocationWhereUniqueInput {
  id?: ID_Input | null
}

export interface ProfileCreateInput {
  id?: ID_Input | null
  phone: String
  active?: Boolean | null
  hospital?: HospitalCreateOneWithoutProfileInput | null
  doctor?: DoctorCreateOneWithoutProfileInput | null
}

export interface ProfileCreateOneWithoutDoctorInput {
  create?: ProfileCreateWithoutDoctorInput | null
  connect?: ProfileWhereUniqueInput | null
}

export interface ProfileCreateOneWithoutHospitalInput {
  create?: ProfileCreateWithoutHospitalInput | null
  connect?: ProfileWhereUniqueInput | null
}

export interface ProfileCreateWithoutDoctorInput {
  id?: ID_Input | null
  phone: String
  active?: Boolean | null
  hospital?: HospitalCreateOneWithoutProfileInput | null
}

export interface ProfileCreateWithoutHospitalInput {
  id?: ID_Input | null
  phone: String
  active?: Boolean | null
  doctor?: DoctorCreateOneWithoutProfileInput | null
}

export interface ProfileSubscriptionWhereInput {
  AND?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput | null
  OR?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput | null
  NOT?: ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ProfileWhereInput | null
}

export interface ProfileUpdateInput {
  phone?: String | null
  active?: Boolean | null
  hospital?: HospitalUpdateOneWithoutProfileInput | null
  doctor?: DoctorUpdateOneWithoutProfileInput | null
}

export interface ProfileUpdateManyMutationInput {
  phone?: String | null
  active?: Boolean | null
}

export interface ProfileUpdateOneRequiredWithoutHospitalInput {
  create?: ProfileCreateWithoutHospitalInput | null
  connect?: ProfileWhereUniqueInput | null
  update?: ProfileUpdateWithoutHospitalDataInput | null
  upsert?: ProfileUpsertWithoutHospitalInput | null
}

export interface ProfileUpdateOneWithoutDoctorInput {
  create?: ProfileCreateWithoutDoctorInput | null
  connect?: ProfileWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: ProfileUpdateWithoutDoctorDataInput | null
  upsert?: ProfileUpsertWithoutDoctorInput | null
}

export interface ProfileUpdateWithoutDoctorDataInput {
  phone?: String | null
  active?: Boolean | null
  hospital?: HospitalUpdateOneWithoutProfileInput | null
}

export interface ProfileUpdateWithoutHospitalDataInput {
  phone?: String | null
  active?: Boolean | null
  doctor?: DoctorUpdateOneWithoutProfileInput | null
}

export interface ProfileUpsertWithoutDoctorInput {
  update: ProfileUpdateWithoutDoctorDataInput
  create: ProfileCreateWithoutDoctorInput
}

export interface ProfileUpsertWithoutHospitalInput {
  update: ProfileUpdateWithoutHospitalDataInput
  create: ProfileCreateWithoutHospitalInput
}

export interface ProfileWhereInput {
  AND?: ProfileWhereInput[] | ProfileWhereInput | null
  OR?: ProfileWhereInput[] | ProfileWhereInput | null
  NOT?: ProfileWhereInput[] | ProfileWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  phone?: String | null
  phone_not?: String | null
  phone_in?: String[] | String | null
  phone_not_in?: String[] | String | null
  phone_lt?: String | null
  phone_lte?: String | null
  phone_gt?: String | null
  phone_gte?: String | null
  phone_contains?: String | null
  phone_not_contains?: String | null
  phone_starts_with?: String | null
  phone_not_starts_with?: String | null
  phone_ends_with?: String | null
  phone_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  active?: Boolean | null
  active_not?: Boolean | null
  hospital?: HospitalWhereInput | null
  doctor?: DoctorWhereInput | null
}

export interface ProfileWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  name: String
  email: String
  password: String
  emailVerification?: Boolean | null
  roles?: UserRoles | null
  doctor?: DoctorCreateOneWithoutUserInput | null
  verifac?: VerificationCodeCreateOneWithoutUserInput | null
  hospital?: HospitalCreateOneWithoutControllersInput | null
}

export interface UserCreateManyWithoutHospitalInput {
  create?: UserCreateWithoutHospitalInput[] | UserCreateWithoutHospitalInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutDoctorInput {
  create?: UserCreateWithoutDoctorInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutVerifacInput {
  create?: UserCreateWithoutVerifacInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutDoctorInput {
  id?: ID_Input | null
  name: String
  email: String
  password: String
  emailVerification?: Boolean | null
  roles?: UserRoles | null
  verifac?: VerificationCodeCreateOneWithoutUserInput | null
  hospital?: HospitalCreateOneWithoutControllersInput | null
}

export interface UserCreateWithoutHospitalInput {
  id?: ID_Input | null
  name: String
  email: String
  password: String
  emailVerification?: Boolean | null
  roles?: UserRoles | null
  doctor?: DoctorCreateOneWithoutUserInput | null
  verifac?: VerificationCodeCreateOneWithoutUserInput | null
}

export interface UserCreateWithoutVerifacInput {
  id?: ID_Input | null
  name: String
  email: String
  password: String
  emailVerification?: Boolean | null
  roles?: UserRoles | null
  doctor?: DoctorCreateOneWithoutUserInput | null
  hospital?: HospitalCreateOneWithoutControllersInput | null
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[] | UserScalarWhereInput | null
  OR?: UserScalarWhereInput[] | UserScalarWhereInput | null
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  emailVerification?: Boolean | null
  emailVerification_not?: Boolean | null
  roles?: UserRoles | null
  roles_not?: UserRoles | null
  roles_in?: UserRoles[] | UserRoles | null
  roles_not_in?: UserRoles[] | UserRoles | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  name?: String | null
  email?: String | null
  password?: String | null
  emailVerification?: Boolean | null
  roles?: UserRoles | null
  doctor?: DoctorUpdateOneWithoutUserInput | null
  verifac?: VerificationCodeUpdateOneWithoutUserInput | null
  hospital?: HospitalUpdateOneWithoutControllersInput | null
}

export interface UserUpdateManyDataInput {
  name?: String | null
  email?: String | null
  password?: String | null
  emailVerification?: Boolean | null
  roles?: UserRoles | null
}

export interface UserUpdateManyMutationInput {
  name?: String | null
  email?: String | null
  password?: String | null
  emailVerification?: Boolean | null
  roles?: UserRoles | null
}

export interface UserUpdateManyWithoutHospitalInput {
  create?: UserCreateWithoutHospitalInput[] | UserCreateWithoutHospitalInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutHospitalInput[] | UserUpdateWithWhereUniqueWithoutHospitalInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutHospitalInput[] | UserUpsertWithWhereUniqueWithoutHospitalInput | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateOneRequiredWithoutDoctorInput {
  create?: UserCreateWithoutDoctorInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutDoctorDataInput | null
  upsert?: UserUpsertWithoutDoctorInput | null
}

export interface UserUpdateOneWithoutVerifacInput {
  create?: UserCreateWithoutVerifacInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutVerifacDataInput | null
  upsert?: UserUpsertWithoutVerifacInput | null
}

export interface UserUpdateWithoutDoctorDataInput {
  name?: String | null
  email?: String | null
  password?: String | null
  emailVerification?: Boolean | null
  roles?: UserRoles | null
  verifac?: VerificationCodeUpdateOneWithoutUserInput | null
  hospital?: HospitalUpdateOneWithoutControllersInput | null
}

export interface UserUpdateWithoutHospitalDataInput {
  name?: String | null
  email?: String | null
  password?: String | null
  emailVerification?: Boolean | null
  roles?: UserRoles | null
  doctor?: DoctorUpdateOneWithoutUserInput | null
  verifac?: VerificationCodeUpdateOneWithoutUserInput | null
}

export interface UserUpdateWithoutVerifacDataInput {
  name?: String | null
  email?: String | null
  password?: String | null
  emailVerification?: Boolean | null
  roles?: UserRoles | null
  doctor?: DoctorUpdateOneWithoutUserInput | null
  hospital?: HospitalUpdateOneWithoutControllersInput | null
}

export interface UserUpdateWithWhereUniqueWithoutHospitalInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutHospitalDataInput
}

export interface UserUpsertWithoutDoctorInput {
  update: UserUpdateWithoutDoctorDataInput
  create: UserCreateWithoutDoctorInput
}

export interface UserUpsertWithoutVerifacInput {
  update: UserUpdateWithoutVerifacDataInput
  create: UserCreateWithoutVerifacInput
}

export interface UserUpsertWithWhereUniqueWithoutHospitalInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutHospitalDataInput
  create: UserCreateWithoutHospitalInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  emailVerification?: Boolean | null
  emailVerification_not?: Boolean | null
  roles?: UserRoles | null
  roles_not?: UserRoles | null
  roles_in?: UserRoles[] | UserRoles | null
  roles_not_in?: UserRoles[] | UserRoles | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  doctor?: DoctorWhereInput | null
  verifac?: VerificationCodeWhereInput | null
  hospital?: HospitalWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

export interface VerificationCodeCreateInput {
  id?: ID_Input | null
  uid: String
  user?: UserCreateOneWithoutVerifacInput | null
  doctor?: DoctorCreateOneWithoutVerifacInput | null
}

export interface VerificationCodeCreateOneWithoutDoctorInput {
  create?: VerificationCodeCreateWithoutDoctorInput | null
  connect?: VerificationCodeWhereUniqueInput | null
}

export interface VerificationCodeCreateOneWithoutUserInput {
  create?: VerificationCodeCreateWithoutUserInput | null
  connect?: VerificationCodeWhereUniqueInput | null
}

export interface VerificationCodeCreateWithoutDoctorInput {
  id?: ID_Input | null
  uid: String
  user?: UserCreateOneWithoutVerifacInput | null
}

export interface VerificationCodeCreateWithoutUserInput {
  id?: ID_Input | null
  uid: String
  doctor?: DoctorCreateOneWithoutVerifacInput | null
}

export interface VerificationCodeSubscriptionWhereInput {
  AND?: VerificationCodeSubscriptionWhereInput[] | VerificationCodeSubscriptionWhereInput | null
  OR?: VerificationCodeSubscriptionWhereInput[] | VerificationCodeSubscriptionWhereInput | null
  NOT?: VerificationCodeSubscriptionWhereInput[] | VerificationCodeSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: VerificationCodeWhereInput | null
}

export interface VerificationCodeUpdateInput {
  uid?: String | null
  user?: UserUpdateOneWithoutVerifacInput | null
  doctor?: DoctorUpdateOneWithoutVerifacInput | null
}

export interface VerificationCodeUpdateManyMutationInput {
  uid?: String | null
}

export interface VerificationCodeUpdateOneWithoutDoctorInput {
  create?: VerificationCodeCreateWithoutDoctorInput | null
  connect?: VerificationCodeWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: VerificationCodeUpdateWithoutDoctorDataInput | null
  upsert?: VerificationCodeUpsertWithoutDoctorInput | null
}

export interface VerificationCodeUpdateOneWithoutUserInput {
  create?: VerificationCodeCreateWithoutUserInput | null
  connect?: VerificationCodeWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: VerificationCodeUpdateWithoutUserDataInput | null
  upsert?: VerificationCodeUpsertWithoutUserInput | null
}

export interface VerificationCodeUpdateWithoutDoctorDataInput {
  uid?: String | null
  user?: UserUpdateOneWithoutVerifacInput | null
}

export interface VerificationCodeUpdateWithoutUserDataInput {
  uid?: String | null
  doctor?: DoctorUpdateOneWithoutVerifacInput | null
}

export interface VerificationCodeUpsertWithoutDoctorInput {
  update: VerificationCodeUpdateWithoutDoctorDataInput
  create: VerificationCodeCreateWithoutDoctorInput
}

export interface VerificationCodeUpsertWithoutUserInput {
  update: VerificationCodeUpdateWithoutUserDataInput
  create: VerificationCodeCreateWithoutUserInput
}

export interface VerificationCodeWhereInput {
  AND?: VerificationCodeWhereInput[] | VerificationCodeWhereInput | null
  OR?: VerificationCodeWhereInput[] | VerificationCodeWhereInput | null
  NOT?: VerificationCodeWhereInput[] | VerificationCodeWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  uid?: String | null
  uid_not?: String | null
  uid_in?: String[] | String | null
  uid_not_in?: String[] | String | null
  uid_lt?: String | null
  uid_lte?: String | null
  uid_gt?: String | null
  uid_gte?: String | null
  uid_contains?: String | null
  uid_not_contains?: String | null
  uid_starts_with?: String | null
  uid_not_starts_with?: String | null
  uid_ends_with?: String | null
  uid_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  user?: UserWhereInput | null
  doctor?: DoctorWhereInput | null
}

export interface VerificationCodeWhereUniqueInput {
  id?: ID_Input | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateAppointment {
  count: Int
}

export interface AggregateAttending {
  count: Int
}

export interface AggregateChamber {
  count: Int
}

export interface AggregateDoctor {
  count: Int
}

export interface AggregateHospital {
  count: Int
}

export interface AggregateLocation {
  count: Int
}

export interface AggregateProfile {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface AggregateVerificationCode {
  count: Int
}

export interface Appointment extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  start_time: DateTime
  end_time: DateTime
  chamber?: Chamber | null
  hospital?: Hospital | null
}

/*
 * A connection to a list of items.

 */
export interface AppointmentConnection {
  pageInfo: PageInfo
  edges: Array<AppointmentEdge | null>
  aggregate: AggregateAppointment
}

/*
 * An edge in a connection.

 */
export interface AppointmentEdge {
  node: Appointment
  cursor: String
}

export interface AppointmentPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  start_time: DateTime
  end_time: DateTime
}

export interface AppointmentSubscriptionPayload {
  mutation: MutationType
  node?: Appointment | null
  updatedFields?: Array<String> | null
  previousValues?: AppointmentPreviousValues | null
}

export interface Attending extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  doctor?: Doctor | null
  chamber?: Array<Chamber> | null
}

/*
 * A connection to a list of items.

 */
export interface AttendingConnection {
  pageInfo: PageInfo
  edges: Array<AttendingEdge | null>
  aggregate: AggregateAttending
}

/*
 * An edge in a connection.

 */
export interface AttendingEdge {
  node: Attending
  cursor: String
}

export interface AttendingPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AttendingSubscriptionPayload {
  mutation: MutationType
  node?: Attending | null
  updatedFields?: Array<String> | null
  previousValues?: AttendingPreviousValues | null
}

export interface BatchPayload {
  count: Long
}

export interface Chamber extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  start_time: DateTime
  end_time: DateTime
  attending?: Array<Attending> | null
  appointments?: Array<Appointment> | null
  doctor?: Array<Doctor> | null
  location?: Location | null
}

/*
 * A connection to a list of items.

 */
export interface ChamberConnection {
  pageInfo: PageInfo
  edges: Array<ChamberEdge | null>
  aggregate: AggregateChamber
}

/*
 * An edge in a connection.

 */
export interface ChamberEdge {
  node: Chamber
  cursor: String
}

export interface ChamberPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  start_time: DateTime
  end_time: DateTime
}

export interface ChamberSubscriptionPayload {
  mutation: MutationType
  node?: Chamber | null
  updatedFields?: Array<String> | null
  previousValues?: ChamberPreviousValues | null
}

export interface Doctor extends Node {
  id: ID_Output
  name: String
  specialization: String
  createdAt: DateTime
  updatedAt: DateTime
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
  user: User
  attending?: Array<Attending> | null
  chamber?: Array<Chamber> | null
  verifac?: VerificationCode | null
  profile?: Profile | null
}

/*
 * A connection to a list of items.

 */
export interface DoctorConnection {
  pageInfo: PageInfo
  edges: Array<DoctorEdge | null>
  aggregate: AggregateDoctor
}

/*
 * An edge in a connection.

 */
export interface DoctorEdge {
  node: Doctor
  cursor: String
}

export interface DoctorPreviousValues {
  id: ID_Output
  name: String
  specialization: String
  createdAt: DateTime
  updatedAt: DateTime
  emailVerification?: Boolean | null
  phone?: String | null
  address?: String | null
  state?: String | null
  zip?: String | null
}

export interface DoctorSubscriptionPayload {
  mutation: MutationType
  node?: Doctor | null
  updatedFields?: Array<String> | null
  previousValues?: DoctorPreviousValues | null
}

export interface Hospital extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  emailVerification?: Boolean | null
  name: String
  profile: Profile
  controllers?: Array<User> | null
  appointments?: Array<Appointment> | null
  location?: Location | null
}

/*
 * A connection to a list of items.

 */
export interface HospitalConnection {
  pageInfo: PageInfo
  edges: Array<HospitalEdge | null>
  aggregate: AggregateHospital
}

/*
 * An edge in a connection.

 */
export interface HospitalEdge {
  node: Hospital
  cursor: String
}

export interface HospitalPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  emailVerification?: Boolean | null
  name: String
}

export interface HospitalSubscriptionPayload {
  mutation: MutationType
  node?: Hospital | null
  updatedFields?: Array<String> | null
  previousValues?: HospitalPreviousValues | null
}

export interface Location extends Node {
  id: ID_Output
  address?: String | null
  slug?: String | null
  lat?: String | null
  lng?: String | null
  addressID?: String | null
  createdAt: DateTime
  updatedAt: DateTime
  hospital?: Hospital | null
  chamber?: Chamber | null
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo: PageInfo
  edges: Array<LocationEdge | null>
  aggregate: AggregateLocation
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location
  cursor: String
}

export interface LocationPreviousValues {
  id: ID_Output
  address?: String | null
  slug?: String | null
  lat?: String | null
  lng?: String | null
  addressID?: String | null
  createdAt: DateTime
  updatedAt: DateTime
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location | null
  updatedFields?: Array<String> | null
  previousValues?: LocationPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Profile extends Node {
  id: ID_Output
  phone: String
  createdAt: DateTime
  updatedAt: DateTime
  active?: Boolean | null
  hospital?: Hospital | null
  doctor?: Doctor | null
}

/*
 * A connection to a list of items.

 */
export interface ProfileConnection {
  pageInfo: PageInfo
  edges: Array<ProfileEdge | null>
  aggregate: AggregateProfile
}

/*
 * An edge in a connection.

 */
export interface ProfileEdge {
  node: Profile
  cursor: String
}

export interface ProfilePreviousValues {
  id: ID_Output
  phone: String
  createdAt: DateTime
  updatedAt: DateTime
  active?: Boolean | null
}

export interface ProfileSubscriptionPayload {
  mutation: MutationType
  node?: Profile | null
  updatedFields?: Array<String> | null
  previousValues?: ProfilePreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
  emailVerification?: Boolean | null
  roles?: UserRoles | null
  createdAt: DateTime
  updatedAt: DateTime
  doctor?: Doctor | null
  verifac?: VerificationCode | null
  hospital?: Hospital | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
  emailVerification?: Boolean | null
  roles?: UserRoles | null
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

export interface VerificationCode extends Node {
  id: ID_Output
  uid: String
  createdAt: DateTime
  updatedAt: DateTime
  user?: User | null
  doctor?: Doctor | null
}

/*
 * A connection to a list of items.

 */
export interface VerificationCodeConnection {
  pageInfo: PageInfo
  edges: Array<VerificationCodeEdge | null>
  aggregate: AggregateVerificationCode
}

/*
 * An edge in a connection.

 */
export interface VerificationCodeEdge {
  node: VerificationCode
  cursor: String
}

export interface VerificationCodePreviousValues {
  id: ID_Output
  uid: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface VerificationCodeSubscriptionPayload {
  mutation: MutationType
  node?: VerificationCode | null
  updatedFields?: Array<String> | null
  previousValues?: VerificationCodePreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
Raw JSON value
*/
export type Json = any

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string