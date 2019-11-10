
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum AppointmentOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    start_time_ASC = "start_time_ASC",
    start_time_DESC = "start_time_DESC",
    end_time_ASC = "end_time_ASC",
    end_time_DESC = "end_time_DESC"
}

export enum AttendingOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export enum ChamberOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    start_time_ASC = "start_time_ASC",
    start_time_DESC = "start_time_DESC",
    end_time_ASC = "end_time_ASC",
    end_time_DESC = "end_time_DESC"
}

export enum DoctorOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    specialization_ASC = "specialization_ASC",
    specialization_DESC = "specialization_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    emailVerification_ASC = "emailVerification_ASC",
    emailVerification_DESC = "emailVerification_DESC",
    phone_ASC = "phone_ASC",
    phone_DESC = "phone_DESC",
    address_ASC = "address_ASC",
    address_DESC = "address_DESC",
    state_ASC = "state_ASC",
    state_DESC = "state_DESC",
    zip_ASC = "zip_ASC",
    zip_DESC = "zip_DESC"
}

export enum HospitalOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    emailVerification_ASC = "emailVerification_ASC",
    emailVerification_DESC = "emailVerification_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC"
}

export enum LocationOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    address_ASC = "address_ASC",
    address_DESC = "address_DESC",
    slug_ASC = "slug_ASC",
    slug_DESC = "slug_DESC",
    lat_ASC = "lat_ASC",
    lat_DESC = "lat_DESC",
    lng_ASC = "lng_ASC",
    lng_DESC = "lng_DESC",
    addressID_ASC = "addressID_ASC",
    addressID_DESC = "addressID_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum PrismaDatabase {
    default = "default"
}

export enum ProfileOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    phone_ASC = "phone_ASC",
    phone_DESC = "phone_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    active_ASC = "active_ASC",
    active_DESC = "active_DESC"
}

export enum UserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    email_ASC = "email_ASC",
    email_DESC = "email_DESC",
    password_ASC = "password_ASC",
    password_DESC = "password_DESC",
    emailVerification_ASC = "emailVerification_ASC",
    emailVerification_DESC = "emailVerification_DESC",
    roles_ASC = "roles_ASC",
    roles_DESC = "roles_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export enum UserRoles {
    ADMIN = "ADMIN",
    USER = "USER",
    STAFF = "STAFF",
    DOCTOR = "DOCTOR",
    ATTENDING = "ATTENDING",
    HOSPITAL = "HOSPITAL"
}

export enum VerificationCodeOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    uid_ASC = "uid_ASC",
    uid_DESC = "uid_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export class AppointmentCreateInput {
    id?: string;
    start_time: DateTime;
    end_time: DateTime;
    chamber?: ChamberCreateOneWithoutAppointmentsInput;
    hospital?: HospitalCreateOneWithoutAppointmentsInput;
}

export class AppointmentCreateManyWithoutChamberInput {
    create?: AppointmentCreateWithoutChamberInput[];
    connect?: AppointmentWhereUniqueInput[];
}

export class AppointmentCreateManyWithoutHospitalInput {
    create?: AppointmentCreateWithoutHospitalInput[];
    connect?: AppointmentWhereUniqueInput[];
}

export class AppointmentCreateWithoutChamberInput {
    id?: string;
    start_time: DateTime;
    end_time: DateTime;
    hospital?: HospitalCreateOneWithoutAppointmentsInput;
}

export class AppointmentCreateWithoutHospitalInput {
    id?: string;
    start_time: DateTime;
    end_time: DateTime;
    chamber?: ChamberCreateOneWithoutAppointmentsInput;
}

export class AppointmentScalarWhereInput {
    AND?: AppointmentScalarWhereInput[];
    OR?: AppointmentScalarWhereInput[];
    NOT?: AppointmentScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    start_time?: DateTime;
    start_time_not?: DateTime;
    start_time_in?: DateTime[];
    start_time_not_in?: DateTime[];
    start_time_lt?: DateTime;
    start_time_lte?: DateTime;
    start_time_gt?: DateTime;
    start_time_gte?: DateTime;
    end_time?: DateTime;
    end_time_not?: DateTime;
    end_time_in?: DateTime[];
    end_time_not_in?: DateTime[];
    end_time_lt?: DateTime;
    end_time_lte?: DateTime;
    end_time_gt?: DateTime;
    end_time_gte?: DateTime;
}

export class AppointmentSubscriptionWhereInput {
    AND?: AppointmentSubscriptionWhereInput[];
    OR?: AppointmentSubscriptionWhereInput[];
    NOT?: AppointmentSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: AppointmentWhereInput;
}

export class AppointmentUpdateInput {
    start_time?: DateTime;
    end_time?: DateTime;
    chamber?: ChamberUpdateOneWithoutAppointmentsInput;
    hospital?: HospitalUpdateOneWithoutAppointmentsInput;
}

export class AppointmentUpdateManyDataInput {
    start_time?: DateTime;
    end_time?: DateTime;
}

export class AppointmentUpdateManyMutationInput {
    start_time?: DateTime;
    end_time?: DateTime;
}

export class AppointmentUpdateManyWithoutChamberInput {
    create?: AppointmentCreateWithoutChamberInput[];
    connect?: AppointmentWhereUniqueInput[];
    set?: AppointmentWhereUniqueInput[];
    disconnect?: AppointmentWhereUniqueInput[];
    delete?: AppointmentWhereUniqueInput[];
    update?: AppointmentUpdateWithWhereUniqueWithoutChamberInput[];
    updateMany?: AppointmentUpdateManyWithWhereNestedInput[];
    deleteMany?: AppointmentScalarWhereInput[];
    upsert?: AppointmentUpsertWithWhereUniqueWithoutChamberInput[];
}

export class AppointmentUpdateManyWithoutHospitalInput {
    create?: AppointmentCreateWithoutHospitalInput[];
    connect?: AppointmentWhereUniqueInput[];
    set?: AppointmentWhereUniqueInput[];
    disconnect?: AppointmentWhereUniqueInput[];
    delete?: AppointmentWhereUniqueInput[];
    update?: AppointmentUpdateWithWhereUniqueWithoutHospitalInput[];
    updateMany?: AppointmentUpdateManyWithWhereNestedInput[];
    deleteMany?: AppointmentScalarWhereInput[];
    upsert?: AppointmentUpsertWithWhereUniqueWithoutHospitalInput[];
}

export class AppointmentUpdateManyWithWhereNestedInput {
    where: AppointmentScalarWhereInput;
    data: AppointmentUpdateManyDataInput;
}

export class AppointmentUpdateWithoutChamberDataInput {
    start_time?: DateTime;
    end_time?: DateTime;
    hospital?: HospitalUpdateOneWithoutAppointmentsInput;
}

export class AppointmentUpdateWithoutHospitalDataInput {
    start_time?: DateTime;
    end_time?: DateTime;
    chamber?: ChamberUpdateOneWithoutAppointmentsInput;
}

export class AppointmentUpdateWithWhereUniqueWithoutChamberInput {
    where: AppointmentWhereUniqueInput;
    data: AppointmentUpdateWithoutChamberDataInput;
}

export class AppointmentUpdateWithWhereUniqueWithoutHospitalInput {
    where: AppointmentWhereUniqueInput;
    data: AppointmentUpdateWithoutHospitalDataInput;
}

export class AppointmentUpsertWithWhereUniqueWithoutChamberInput {
    where: AppointmentWhereUniqueInput;
    update: AppointmentUpdateWithoutChamberDataInput;
    create: AppointmentCreateWithoutChamberInput;
}

export class AppointmentUpsertWithWhereUniqueWithoutHospitalInput {
    where: AppointmentWhereUniqueInput;
    update: AppointmentUpdateWithoutHospitalDataInput;
    create: AppointmentCreateWithoutHospitalInput;
}

export class AppointmentWhereInput {
    AND?: AppointmentWhereInput[];
    OR?: AppointmentWhereInput[];
    NOT?: AppointmentWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    start_time?: DateTime;
    start_time_not?: DateTime;
    start_time_in?: DateTime[];
    start_time_not_in?: DateTime[];
    start_time_lt?: DateTime;
    start_time_lte?: DateTime;
    start_time_gt?: DateTime;
    start_time_gte?: DateTime;
    end_time?: DateTime;
    end_time_not?: DateTime;
    end_time_in?: DateTime[];
    end_time_not_in?: DateTime[];
    end_time_lt?: DateTime;
    end_time_lte?: DateTime;
    end_time_gt?: DateTime;
    end_time_gte?: DateTime;
    chamber?: ChamberWhereInput;
    hospital?: HospitalWhereInput;
}

export class AppointmentWhereUniqueInput {
    id?: string;
}

export class AttendingCreateInput {
    id?: string;
    doctor?: DoctorCreateOneWithoutAttendingInput;
    chamber?: ChamberCreateManyWithoutAttendingInput;
}

export class AttendingCreateManyWithoutChamberInput {
    create?: AttendingCreateWithoutChamberInput[];
    connect?: AttendingWhereUniqueInput[];
}

export class AttendingCreateManyWithoutDoctorInput {
    create?: AttendingCreateWithoutDoctorInput[];
    connect?: AttendingWhereUniqueInput[];
}

export class AttendingCreateWithoutChamberInput {
    id?: string;
    doctor?: DoctorCreateOneWithoutAttendingInput;
}

export class AttendingCreateWithoutDoctorInput {
    id?: string;
    chamber?: ChamberCreateManyWithoutAttendingInput;
}

export class AttendingScalarWhereInput {
    AND?: AttendingScalarWhereInput[];
    OR?: AttendingScalarWhereInput[];
    NOT?: AttendingScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
}

export class AttendingSubscriptionWhereInput {
    AND?: AttendingSubscriptionWhereInput[];
    OR?: AttendingSubscriptionWhereInput[];
    NOT?: AttendingSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: AttendingWhereInput;
}

export class AttendingUpdateInput {
    doctor?: DoctorUpdateOneWithoutAttendingInput;
    chamber?: ChamberUpdateManyWithoutAttendingInput;
}

export class AttendingUpdateManyWithoutChamberInput {
    create?: AttendingCreateWithoutChamberInput[];
    connect?: AttendingWhereUniqueInput[];
    set?: AttendingWhereUniqueInput[];
    disconnect?: AttendingWhereUniqueInput[];
    delete?: AttendingWhereUniqueInput[];
    update?: AttendingUpdateWithWhereUniqueWithoutChamberInput[];
    deleteMany?: AttendingScalarWhereInput[];
    upsert?: AttendingUpsertWithWhereUniqueWithoutChamberInput[];
}

export class AttendingUpdateManyWithoutDoctorInput {
    create?: AttendingCreateWithoutDoctorInput[];
    connect?: AttendingWhereUniqueInput[];
    set?: AttendingWhereUniqueInput[];
    disconnect?: AttendingWhereUniqueInput[];
    delete?: AttendingWhereUniqueInput[];
    update?: AttendingUpdateWithWhereUniqueWithoutDoctorInput[];
    deleteMany?: AttendingScalarWhereInput[];
    upsert?: AttendingUpsertWithWhereUniqueWithoutDoctorInput[];
}

export class AttendingUpdateWithoutChamberDataInput {
    doctor?: DoctorUpdateOneWithoutAttendingInput;
}

export class AttendingUpdateWithoutDoctorDataInput {
    chamber?: ChamberUpdateManyWithoutAttendingInput;
}

export class AttendingUpdateWithWhereUniqueWithoutChamberInput {
    where: AttendingWhereUniqueInput;
    data: AttendingUpdateWithoutChamberDataInput;
}

export class AttendingUpdateWithWhereUniqueWithoutDoctorInput {
    where: AttendingWhereUniqueInput;
    data: AttendingUpdateWithoutDoctorDataInput;
}

export class AttendingUpsertWithWhereUniqueWithoutChamberInput {
    where: AttendingWhereUniqueInput;
    update: AttendingUpdateWithoutChamberDataInput;
    create: AttendingCreateWithoutChamberInput;
}

export class AttendingUpsertWithWhereUniqueWithoutDoctorInput {
    where: AttendingWhereUniqueInput;
    update: AttendingUpdateWithoutDoctorDataInput;
    create: AttendingCreateWithoutDoctorInput;
}

export class AttendingWhereInput {
    AND?: AttendingWhereInput[];
    OR?: AttendingWhereInput[];
    NOT?: AttendingWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    doctor?: DoctorWhereInput;
    chamber_every?: ChamberWhereInput;
    chamber_some?: ChamberWhereInput;
    chamber_none?: ChamberWhereInput;
}

export class AttendingWhereUniqueInput {
    id?: string;
}

export class ChamberCreateInput {
    id?: string;
    name: string;
    start_time: DateTime;
    end_time: DateTime;
    attending?: AttendingCreateManyWithoutChamberInput;
    appointments?: AppointmentCreateManyWithoutChamberInput;
    doctor?: DoctorCreateManyWithoutChamberInput;
    location?: LocationCreateOneWithoutChamberInput;
}

export class ChamberCreateManyWithoutAttendingInput {
    create?: ChamberCreateWithoutAttendingInput[];
    connect?: ChamberWhereUniqueInput[];
}

export class ChamberCreateManyWithoutDoctorInput {
    create?: ChamberCreateWithoutDoctorInput[];
    connect?: ChamberWhereUniqueInput[];
}

export class ChamberCreateOneWithoutAppointmentsInput {
    create?: ChamberCreateWithoutAppointmentsInput;
    connect?: ChamberWhereUniqueInput;
}

export class ChamberCreateOneWithoutLocationInput {
    create?: ChamberCreateWithoutLocationInput;
    connect?: ChamberWhereUniqueInput;
}

export class ChamberCreateWithoutAppointmentsInput {
    id?: string;
    name: string;
    start_time: DateTime;
    end_time: DateTime;
    attending?: AttendingCreateManyWithoutChamberInput;
    doctor?: DoctorCreateManyWithoutChamberInput;
    location?: LocationCreateOneWithoutChamberInput;
}

export class ChamberCreateWithoutAttendingInput {
    id?: string;
    name: string;
    start_time: DateTime;
    end_time: DateTime;
    appointments?: AppointmentCreateManyWithoutChamberInput;
    doctor?: DoctorCreateManyWithoutChamberInput;
    location?: LocationCreateOneWithoutChamberInput;
}

export class ChamberCreateWithoutDoctorInput {
    id?: string;
    name: string;
    start_time: DateTime;
    end_time: DateTime;
    attending?: AttendingCreateManyWithoutChamberInput;
    appointments?: AppointmentCreateManyWithoutChamberInput;
    location?: LocationCreateOneWithoutChamberInput;
}

export class ChamberCreateWithoutLocationInput {
    id?: string;
    name: string;
    start_time: DateTime;
    end_time: DateTime;
    attending?: AttendingCreateManyWithoutChamberInput;
    appointments?: AppointmentCreateManyWithoutChamberInput;
    doctor?: DoctorCreateManyWithoutChamberInput;
}

export class ChamberScalarWhereInput {
    AND?: ChamberScalarWhereInput[];
    OR?: ChamberScalarWhereInput[];
    NOT?: ChamberScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    start_time?: DateTime;
    start_time_not?: DateTime;
    start_time_in?: DateTime[];
    start_time_not_in?: DateTime[];
    start_time_lt?: DateTime;
    start_time_lte?: DateTime;
    start_time_gt?: DateTime;
    start_time_gte?: DateTime;
    end_time?: DateTime;
    end_time_not?: DateTime;
    end_time_in?: DateTime[];
    end_time_not_in?: DateTime[];
    end_time_lt?: DateTime;
    end_time_lte?: DateTime;
    end_time_gt?: DateTime;
    end_time_gte?: DateTime;
}

export class ChamberSubscriptionWhereInput {
    AND?: ChamberSubscriptionWhereInput[];
    OR?: ChamberSubscriptionWhereInput[];
    NOT?: ChamberSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: ChamberWhereInput;
}

export class ChamberUpdateInput {
    name?: string;
    start_time?: DateTime;
    end_time?: DateTime;
    attending?: AttendingUpdateManyWithoutChamberInput;
    appointments?: AppointmentUpdateManyWithoutChamberInput;
    doctor?: DoctorUpdateManyWithoutChamberInput;
    location?: LocationUpdateOneWithoutChamberInput;
}

export class ChamberUpdateManyDataInput {
    name?: string;
    start_time?: DateTime;
    end_time?: DateTime;
}

export class ChamberUpdateManyMutationInput {
    name?: string;
    start_time?: DateTime;
    end_time?: DateTime;
}

export class ChamberUpdateManyWithoutAttendingInput {
    create?: ChamberCreateWithoutAttendingInput[];
    connect?: ChamberWhereUniqueInput[];
    set?: ChamberWhereUniqueInput[];
    disconnect?: ChamberWhereUniqueInput[];
    delete?: ChamberWhereUniqueInput[];
    update?: ChamberUpdateWithWhereUniqueWithoutAttendingInput[];
    updateMany?: ChamberUpdateManyWithWhereNestedInput[];
    deleteMany?: ChamberScalarWhereInput[];
    upsert?: ChamberUpsertWithWhereUniqueWithoutAttendingInput[];
}

export class ChamberUpdateManyWithoutDoctorInput {
    create?: ChamberCreateWithoutDoctorInput[];
    connect?: ChamberWhereUniqueInput[];
    set?: ChamberWhereUniqueInput[];
    disconnect?: ChamberWhereUniqueInput[];
    delete?: ChamberWhereUniqueInput[];
    update?: ChamberUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: ChamberUpdateManyWithWhereNestedInput[];
    deleteMany?: ChamberScalarWhereInput[];
    upsert?: ChamberUpsertWithWhereUniqueWithoutDoctorInput[];
}

export class ChamberUpdateManyWithWhereNestedInput {
    where: ChamberScalarWhereInput;
    data: ChamberUpdateManyDataInput;
}

export class ChamberUpdateOneWithoutAppointmentsInput {
    create?: ChamberCreateWithoutAppointmentsInput;
    connect?: ChamberWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: ChamberUpdateWithoutAppointmentsDataInput;
    upsert?: ChamberUpsertWithoutAppointmentsInput;
}

export class ChamberUpdateOneWithoutLocationInput {
    create?: ChamberCreateWithoutLocationInput;
    connect?: ChamberWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: ChamberUpdateWithoutLocationDataInput;
    upsert?: ChamberUpsertWithoutLocationInput;
}

export class ChamberUpdateWithoutAppointmentsDataInput {
    name?: string;
    start_time?: DateTime;
    end_time?: DateTime;
    attending?: AttendingUpdateManyWithoutChamberInput;
    doctor?: DoctorUpdateManyWithoutChamberInput;
    location?: LocationUpdateOneWithoutChamberInput;
}

export class ChamberUpdateWithoutAttendingDataInput {
    name?: string;
    start_time?: DateTime;
    end_time?: DateTime;
    appointments?: AppointmentUpdateManyWithoutChamberInput;
    doctor?: DoctorUpdateManyWithoutChamberInput;
    location?: LocationUpdateOneWithoutChamberInput;
}

export class ChamberUpdateWithoutDoctorDataInput {
    name?: string;
    start_time?: DateTime;
    end_time?: DateTime;
    attending?: AttendingUpdateManyWithoutChamberInput;
    appointments?: AppointmentUpdateManyWithoutChamberInput;
    location?: LocationUpdateOneWithoutChamberInput;
}

export class ChamberUpdateWithoutLocationDataInput {
    name?: string;
    start_time?: DateTime;
    end_time?: DateTime;
    attending?: AttendingUpdateManyWithoutChamberInput;
    appointments?: AppointmentUpdateManyWithoutChamberInput;
    doctor?: DoctorUpdateManyWithoutChamberInput;
}

export class ChamberUpdateWithWhereUniqueWithoutAttendingInput {
    where: ChamberWhereUniqueInput;
    data: ChamberUpdateWithoutAttendingDataInput;
}

export class ChamberUpdateWithWhereUniqueWithoutDoctorInput {
    where: ChamberWhereUniqueInput;
    data: ChamberUpdateWithoutDoctorDataInput;
}

export class ChamberUpsertWithoutAppointmentsInput {
    update: ChamberUpdateWithoutAppointmentsDataInput;
    create: ChamberCreateWithoutAppointmentsInput;
}

export class ChamberUpsertWithoutLocationInput {
    update: ChamberUpdateWithoutLocationDataInput;
    create: ChamberCreateWithoutLocationInput;
}

export class ChamberUpsertWithWhereUniqueWithoutAttendingInput {
    where: ChamberWhereUniqueInput;
    update: ChamberUpdateWithoutAttendingDataInput;
    create: ChamberCreateWithoutAttendingInput;
}

export class ChamberUpsertWithWhereUniqueWithoutDoctorInput {
    where: ChamberWhereUniqueInput;
    update: ChamberUpdateWithoutDoctorDataInput;
    create: ChamberCreateWithoutDoctorInput;
}

export class ChamberWhereInput {
    AND?: ChamberWhereInput[];
    OR?: ChamberWhereInput[];
    NOT?: ChamberWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    start_time?: DateTime;
    start_time_not?: DateTime;
    start_time_in?: DateTime[];
    start_time_not_in?: DateTime[];
    start_time_lt?: DateTime;
    start_time_lte?: DateTime;
    start_time_gt?: DateTime;
    start_time_gte?: DateTime;
    end_time?: DateTime;
    end_time_not?: DateTime;
    end_time_in?: DateTime[];
    end_time_not_in?: DateTime[];
    end_time_lt?: DateTime;
    end_time_lte?: DateTime;
    end_time_gt?: DateTime;
    end_time_gte?: DateTime;
    attending_every?: AttendingWhereInput;
    attending_some?: AttendingWhereInput;
    attending_none?: AttendingWhereInput;
    appointments_every?: AppointmentWhereInput;
    appointments_some?: AppointmentWhereInput;
    appointments_none?: AppointmentWhereInput;
    doctor_every?: DoctorWhereInput;
    doctor_some?: DoctorWhereInput;
    doctor_none?: DoctorWhereInput;
    location?: LocationWhereInput;
}

export class ChamberWhereUniqueInput {
    id?: string;
}

export class DoctorCreateInput {
    id?: string;
    name: string;
    specialization: string;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
    user: UserCreateOneWithoutDoctorInput;
    attending?: AttendingCreateManyWithoutDoctorInput;
    chamber?: ChamberCreateManyWithoutDoctorInput;
    verifac?: VerificationCodeCreateOneWithoutDoctorInput;
    profile?: ProfileCreateOneWithoutDoctorInput;
}

export class DoctorCreateManyWithoutChamberInput {
    create?: DoctorCreateWithoutChamberInput[];
    connect?: DoctorWhereUniqueInput[];
}

export class DoctorCreateOneWithoutAttendingInput {
    create?: DoctorCreateWithoutAttendingInput;
    connect?: DoctorWhereUniqueInput;
}

export class DoctorCreateOneWithoutProfileInput {
    create?: DoctorCreateWithoutProfileInput;
    connect?: DoctorWhereUniqueInput;
}

export class DoctorCreateOneWithoutUserInput {
    create?: DoctorCreateWithoutUserInput;
    connect?: DoctorWhereUniqueInput;
}

export class DoctorCreateOneWithoutVerifacInput {
    create?: DoctorCreateWithoutVerifacInput;
    connect?: DoctorWhereUniqueInput;
}

export class DoctorCreateWithoutAttendingInput {
    id?: string;
    name: string;
    specialization: string;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
    user: UserCreateOneWithoutDoctorInput;
    chamber?: ChamberCreateManyWithoutDoctorInput;
    verifac?: VerificationCodeCreateOneWithoutDoctorInput;
    profile?: ProfileCreateOneWithoutDoctorInput;
}

export class DoctorCreateWithoutChamberInput {
    id?: string;
    name: string;
    specialization: string;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
    user: UserCreateOneWithoutDoctorInput;
    attending?: AttendingCreateManyWithoutDoctorInput;
    verifac?: VerificationCodeCreateOneWithoutDoctorInput;
    profile?: ProfileCreateOneWithoutDoctorInput;
}

export class DoctorCreateWithoutProfileInput {
    id?: string;
    name: string;
    specialization: string;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
    user: UserCreateOneWithoutDoctorInput;
    attending?: AttendingCreateManyWithoutDoctorInput;
    chamber?: ChamberCreateManyWithoutDoctorInput;
    verifac?: VerificationCodeCreateOneWithoutDoctorInput;
}

export class DoctorCreateWithoutUserInput {
    id?: string;
    name: string;
    specialization: string;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
    attending?: AttendingCreateManyWithoutDoctorInput;
    chamber?: ChamberCreateManyWithoutDoctorInput;
    verifac?: VerificationCodeCreateOneWithoutDoctorInput;
    profile?: ProfileCreateOneWithoutDoctorInput;
}

export class DoctorCreateWithoutVerifacInput {
    id?: string;
    name: string;
    specialization: string;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
    user: UserCreateOneWithoutDoctorInput;
    attending?: AttendingCreateManyWithoutDoctorInput;
    chamber?: ChamberCreateManyWithoutDoctorInput;
    profile?: ProfileCreateOneWithoutDoctorInput;
}

export class DoctorScalarWhereInput {
    AND?: DoctorScalarWhereInput[];
    OR?: DoctorScalarWhereInput[];
    NOT?: DoctorScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    specialization?: string;
    specialization_not?: string;
    specialization_in?: string[];
    specialization_not_in?: string[];
    specialization_lt?: string;
    specialization_lte?: string;
    specialization_gt?: string;
    specialization_gte?: string;
    specialization_contains?: string;
    specialization_not_contains?: string;
    specialization_starts_with?: string;
    specialization_not_starts_with?: string;
    specialization_ends_with?: string;
    specialization_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    emailVerification?: boolean;
    emailVerification_not?: boolean;
    phone?: string;
    phone_not?: string;
    phone_in?: string[];
    phone_not_in?: string[];
    phone_lt?: string;
    phone_lte?: string;
    phone_gt?: string;
    phone_gte?: string;
    phone_contains?: string;
    phone_not_contains?: string;
    phone_starts_with?: string;
    phone_not_starts_with?: string;
    phone_ends_with?: string;
    phone_not_ends_with?: string;
    address?: string;
    address_not?: string;
    address_in?: string[];
    address_not_in?: string[];
    address_lt?: string;
    address_lte?: string;
    address_gt?: string;
    address_gte?: string;
    address_contains?: string;
    address_not_contains?: string;
    address_starts_with?: string;
    address_not_starts_with?: string;
    address_ends_with?: string;
    address_not_ends_with?: string;
    state?: string;
    state_not?: string;
    state_in?: string[];
    state_not_in?: string[];
    state_lt?: string;
    state_lte?: string;
    state_gt?: string;
    state_gte?: string;
    state_contains?: string;
    state_not_contains?: string;
    state_starts_with?: string;
    state_not_starts_with?: string;
    state_ends_with?: string;
    state_not_ends_with?: string;
    zip?: string;
    zip_not?: string;
    zip_in?: string[];
    zip_not_in?: string[];
    zip_lt?: string;
    zip_lte?: string;
    zip_gt?: string;
    zip_gte?: string;
    zip_contains?: string;
    zip_not_contains?: string;
    zip_starts_with?: string;
    zip_not_starts_with?: string;
    zip_ends_with?: string;
    zip_not_ends_with?: string;
}

export class DoctorSubscriptionWhereInput {
    AND?: DoctorSubscriptionWhereInput[];
    OR?: DoctorSubscriptionWhereInput[];
    NOT?: DoctorSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: DoctorWhereInput;
}

export class DoctorUpdateInput {
    name?: string;
    specialization?: string;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
    user?: UserUpdateOneRequiredWithoutDoctorInput;
    attending?: AttendingUpdateManyWithoutDoctorInput;
    chamber?: ChamberUpdateManyWithoutDoctorInput;
    verifac?: VerificationCodeUpdateOneWithoutDoctorInput;
    profile?: ProfileUpdateOneWithoutDoctorInput;
}

export class DoctorUpdateManyDataInput {
    name?: string;
    specialization?: string;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
}

export class DoctorUpdateManyMutationInput {
    name?: string;
    specialization?: string;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
}

export class DoctorUpdateManyWithoutChamberInput {
    create?: DoctorCreateWithoutChamberInput[];
    connect?: DoctorWhereUniqueInput[];
    set?: DoctorWhereUniqueInput[];
    disconnect?: DoctorWhereUniqueInput[];
    delete?: DoctorWhereUniqueInput[];
    update?: DoctorUpdateWithWhereUniqueWithoutChamberInput[];
    updateMany?: DoctorUpdateManyWithWhereNestedInput[];
    deleteMany?: DoctorScalarWhereInput[];
    upsert?: DoctorUpsertWithWhereUniqueWithoutChamberInput[];
}

export class DoctorUpdateManyWithWhereNestedInput {
    where: DoctorScalarWhereInput;
    data: DoctorUpdateManyDataInput;
}

export class DoctorUpdateOneWithoutAttendingInput {
    create?: DoctorCreateWithoutAttendingInput;
    connect?: DoctorWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: DoctorUpdateWithoutAttendingDataInput;
    upsert?: DoctorUpsertWithoutAttendingInput;
}

export class DoctorUpdateOneWithoutProfileInput {
    create?: DoctorCreateWithoutProfileInput;
    connect?: DoctorWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: DoctorUpdateWithoutProfileDataInput;
    upsert?: DoctorUpsertWithoutProfileInput;
}

export class DoctorUpdateOneWithoutUserInput {
    create?: DoctorCreateWithoutUserInput;
    connect?: DoctorWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: DoctorUpdateWithoutUserDataInput;
    upsert?: DoctorUpsertWithoutUserInput;
}

export class DoctorUpdateOneWithoutVerifacInput {
    create?: DoctorCreateWithoutVerifacInput;
    connect?: DoctorWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: DoctorUpdateWithoutVerifacDataInput;
    upsert?: DoctorUpsertWithoutVerifacInput;
}

export class DoctorUpdateWithoutAttendingDataInput {
    name?: string;
    specialization?: string;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
    user?: UserUpdateOneRequiredWithoutDoctorInput;
    chamber?: ChamberUpdateManyWithoutDoctorInput;
    verifac?: VerificationCodeUpdateOneWithoutDoctorInput;
    profile?: ProfileUpdateOneWithoutDoctorInput;
}

export class DoctorUpdateWithoutChamberDataInput {
    name?: string;
    specialization?: string;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
    user?: UserUpdateOneRequiredWithoutDoctorInput;
    attending?: AttendingUpdateManyWithoutDoctorInput;
    verifac?: VerificationCodeUpdateOneWithoutDoctorInput;
    profile?: ProfileUpdateOneWithoutDoctorInput;
}

export class DoctorUpdateWithoutProfileDataInput {
    name?: string;
    specialization?: string;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
    user?: UserUpdateOneRequiredWithoutDoctorInput;
    attending?: AttendingUpdateManyWithoutDoctorInput;
    chamber?: ChamberUpdateManyWithoutDoctorInput;
    verifac?: VerificationCodeUpdateOneWithoutDoctorInput;
}

export class DoctorUpdateWithoutUserDataInput {
    name?: string;
    specialization?: string;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
    attending?: AttendingUpdateManyWithoutDoctorInput;
    chamber?: ChamberUpdateManyWithoutDoctorInput;
    verifac?: VerificationCodeUpdateOneWithoutDoctorInput;
    profile?: ProfileUpdateOneWithoutDoctorInput;
}

export class DoctorUpdateWithoutVerifacDataInput {
    name?: string;
    specialization?: string;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
    user?: UserUpdateOneRequiredWithoutDoctorInput;
    attending?: AttendingUpdateManyWithoutDoctorInput;
    chamber?: ChamberUpdateManyWithoutDoctorInput;
    profile?: ProfileUpdateOneWithoutDoctorInput;
}

export class DoctorUpdateWithWhereUniqueWithoutChamberInput {
    where: DoctorWhereUniqueInput;
    data: DoctorUpdateWithoutChamberDataInput;
}

export class DoctorUpsertWithoutAttendingInput {
    update: DoctorUpdateWithoutAttendingDataInput;
    create: DoctorCreateWithoutAttendingInput;
}

export class DoctorUpsertWithoutProfileInput {
    update: DoctorUpdateWithoutProfileDataInput;
    create: DoctorCreateWithoutProfileInput;
}

export class DoctorUpsertWithoutUserInput {
    update: DoctorUpdateWithoutUserDataInput;
    create: DoctorCreateWithoutUserInput;
}

export class DoctorUpsertWithoutVerifacInput {
    update: DoctorUpdateWithoutVerifacDataInput;
    create: DoctorCreateWithoutVerifacInput;
}

export class DoctorUpsertWithWhereUniqueWithoutChamberInput {
    where: DoctorWhereUniqueInput;
    update: DoctorUpdateWithoutChamberDataInput;
    create: DoctorCreateWithoutChamberInput;
}

export class DoctorWhereInput {
    AND?: DoctorWhereInput[];
    OR?: DoctorWhereInput[];
    NOT?: DoctorWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    specialization?: string;
    specialization_not?: string;
    specialization_in?: string[];
    specialization_not_in?: string[];
    specialization_lt?: string;
    specialization_lte?: string;
    specialization_gt?: string;
    specialization_gte?: string;
    specialization_contains?: string;
    specialization_not_contains?: string;
    specialization_starts_with?: string;
    specialization_not_starts_with?: string;
    specialization_ends_with?: string;
    specialization_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    emailVerification?: boolean;
    emailVerification_not?: boolean;
    phone?: string;
    phone_not?: string;
    phone_in?: string[];
    phone_not_in?: string[];
    phone_lt?: string;
    phone_lte?: string;
    phone_gt?: string;
    phone_gte?: string;
    phone_contains?: string;
    phone_not_contains?: string;
    phone_starts_with?: string;
    phone_not_starts_with?: string;
    phone_ends_with?: string;
    phone_not_ends_with?: string;
    address?: string;
    address_not?: string;
    address_in?: string[];
    address_not_in?: string[];
    address_lt?: string;
    address_lte?: string;
    address_gt?: string;
    address_gte?: string;
    address_contains?: string;
    address_not_contains?: string;
    address_starts_with?: string;
    address_not_starts_with?: string;
    address_ends_with?: string;
    address_not_ends_with?: string;
    state?: string;
    state_not?: string;
    state_in?: string[];
    state_not_in?: string[];
    state_lt?: string;
    state_lte?: string;
    state_gt?: string;
    state_gte?: string;
    state_contains?: string;
    state_not_contains?: string;
    state_starts_with?: string;
    state_not_starts_with?: string;
    state_ends_with?: string;
    state_not_ends_with?: string;
    zip?: string;
    zip_not?: string;
    zip_in?: string[];
    zip_not_in?: string[];
    zip_lt?: string;
    zip_lte?: string;
    zip_gt?: string;
    zip_gte?: string;
    zip_contains?: string;
    zip_not_contains?: string;
    zip_starts_with?: string;
    zip_not_starts_with?: string;
    zip_ends_with?: string;
    zip_not_ends_with?: string;
    user?: UserWhereInput;
    attending_every?: AttendingWhereInput;
    attending_some?: AttendingWhereInput;
    attending_none?: AttendingWhereInput;
    chamber_every?: ChamberWhereInput;
    chamber_some?: ChamberWhereInput;
    chamber_none?: ChamberWhereInput;
    verifac?: VerificationCodeWhereInput;
    profile?: ProfileWhereInput;
}

export class DoctorWhereUniqueInput {
    id?: string;
}

export class HospitalCreateInput {
    id?: string;
    emailVerification?: boolean;
    name: string;
    profile: ProfileCreateOneWithoutHospitalInput;
    controllers?: UserCreateManyWithoutHospitalInput;
    appointments?: AppointmentCreateManyWithoutHospitalInput;
    location?: LocationCreateOneWithoutHospitalInput;
}

export class HospitalCreateOneWithoutAppointmentsInput {
    create?: HospitalCreateWithoutAppointmentsInput;
    connect?: HospitalWhereUniqueInput;
}

export class HospitalCreateOneWithoutControllersInput {
    create?: HospitalCreateWithoutControllersInput;
    connect?: HospitalWhereUniqueInput;
}

export class HospitalCreateOneWithoutLocationInput {
    create?: HospitalCreateWithoutLocationInput;
    connect?: HospitalWhereUniqueInput;
}

export class HospitalCreateOneWithoutProfileInput {
    create?: HospitalCreateWithoutProfileInput;
    connect?: HospitalWhereUniqueInput;
}

export class HospitalCreateWithoutAppointmentsInput {
    id?: string;
    emailVerification?: boolean;
    name: string;
    profile: ProfileCreateOneWithoutHospitalInput;
    controllers?: UserCreateManyWithoutHospitalInput;
    location?: LocationCreateOneWithoutHospitalInput;
}

export class HospitalCreateWithoutControllersInput {
    id?: string;
    emailVerification?: boolean;
    name: string;
    profile: ProfileCreateOneWithoutHospitalInput;
    appointments?: AppointmentCreateManyWithoutHospitalInput;
    location?: LocationCreateOneWithoutHospitalInput;
}

export class HospitalCreateWithoutLocationInput {
    id?: string;
    emailVerification?: boolean;
    name: string;
    profile: ProfileCreateOneWithoutHospitalInput;
    controllers?: UserCreateManyWithoutHospitalInput;
    appointments?: AppointmentCreateManyWithoutHospitalInput;
}

export class HospitalCreateWithoutProfileInput {
    id?: string;
    emailVerification?: boolean;
    name: string;
    controllers?: UserCreateManyWithoutHospitalInput;
    appointments?: AppointmentCreateManyWithoutHospitalInput;
    location?: LocationCreateOneWithoutHospitalInput;
}

export class HospitalSubscriptionWhereInput {
    AND?: HospitalSubscriptionWhereInput[];
    OR?: HospitalSubscriptionWhereInput[];
    NOT?: HospitalSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: HospitalWhereInput;
}

export class HospitalUpdateInput {
    emailVerification?: boolean;
    name?: string;
    profile?: ProfileUpdateOneRequiredWithoutHospitalInput;
    controllers?: UserUpdateManyWithoutHospitalInput;
    appointments?: AppointmentUpdateManyWithoutHospitalInput;
    location?: LocationUpdateOneWithoutHospitalInput;
}

export class HospitalUpdateManyMutationInput {
    emailVerification?: boolean;
    name?: string;
}

export class HospitalUpdateOneWithoutAppointmentsInput {
    create?: HospitalCreateWithoutAppointmentsInput;
    connect?: HospitalWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: HospitalUpdateWithoutAppointmentsDataInput;
    upsert?: HospitalUpsertWithoutAppointmentsInput;
}

export class HospitalUpdateOneWithoutControllersInput {
    create?: HospitalCreateWithoutControllersInput;
    connect?: HospitalWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: HospitalUpdateWithoutControllersDataInput;
    upsert?: HospitalUpsertWithoutControllersInput;
}

export class HospitalUpdateOneWithoutLocationInput {
    create?: HospitalCreateWithoutLocationInput;
    connect?: HospitalWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: HospitalUpdateWithoutLocationDataInput;
    upsert?: HospitalUpsertWithoutLocationInput;
}

export class HospitalUpdateOneWithoutProfileInput {
    create?: HospitalCreateWithoutProfileInput;
    connect?: HospitalWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: HospitalUpdateWithoutProfileDataInput;
    upsert?: HospitalUpsertWithoutProfileInput;
}

export class HospitalUpdateWithoutAppointmentsDataInput {
    emailVerification?: boolean;
    name?: string;
    profile?: ProfileUpdateOneRequiredWithoutHospitalInput;
    controllers?: UserUpdateManyWithoutHospitalInput;
    location?: LocationUpdateOneWithoutHospitalInput;
}

export class HospitalUpdateWithoutControllersDataInput {
    emailVerification?: boolean;
    name?: string;
    profile?: ProfileUpdateOneRequiredWithoutHospitalInput;
    appointments?: AppointmentUpdateManyWithoutHospitalInput;
    location?: LocationUpdateOneWithoutHospitalInput;
}

export class HospitalUpdateWithoutLocationDataInput {
    emailVerification?: boolean;
    name?: string;
    profile?: ProfileUpdateOneRequiredWithoutHospitalInput;
    controllers?: UserUpdateManyWithoutHospitalInput;
    appointments?: AppointmentUpdateManyWithoutHospitalInput;
}

export class HospitalUpdateWithoutProfileDataInput {
    emailVerification?: boolean;
    name?: string;
    controllers?: UserUpdateManyWithoutHospitalInput;
    appointments?: AppointmentUpdateManyWithoutHospitalInput;
    location?: LocationUpdateOneWithoutHospitalInput;
}

export class HospitalUpsertWithoutAppointmentsInput {
    update: HospitalUpdateWithoutAppointmentsDataInput;
    create: HospitalCreateWithoutAppointmentsInput;
}

export class HospitalUpsertWithoutControllersInput {
    update: HospitalUpdateWithoutControllersDataInput;
    create: HospitalCreateWithoutControllersInput;
}

export class HospitalUpsertWithoutLocationInput {
    update: HospitalUpdateWithoutLocationDataInput;
    create: HospitalCreateWithoutLocationInput;
}

export class HospitalUpsertWithoutProfileInput {
    update: HospitalUpdateWithoutProfileDataInput;
    create: HospitalCreateWithoutProfileInput;
}

export class HospitalWhereInput {
    AND?: HospitalWhereInput[];
    OR?: HospitalWhereInput[];
    NOT?: HospitalWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    emailVerification?: boolean;
    emailVerification_not?: boolean;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    profile?: ProfileWhereInput;
    controllers_every?: UserWhereInput;
    controllers_some?: UserWhereInput;
    controllers_none?: UserWhereInput;
    appointments_every?: AppointmentWhereInput;
    appointments_some?: AppointmentWhereInput;
    appointments_none?: AppointmentWhereInput;
    location?: LocationWhereInput;
}

export class HospitalWhereUniqueInput {
    id?: string;
}

export class LocationCreateInput {
    id?: string;
    address?: string;
    slug?: string;
    lat?: string;
    lng?: string;
    addressID?: string;
    hospital?: HospitalCreateOneWithoutLocationInput;
    chamber?: ChamberCreateOneWithoutLocationInput;
}

export class LocationCreateOneWithoutChamberInput {
    create?: LocationCreateWithoutChamberInput;
    connect?: LocationWhereUniqueInput;
}

export class LocationCreateOneWithoutHospitalInput {
    create?: LocationCreateWithoutHospitalInput;
    connect?: LocationWhereUniqueInput;
}

export class LocationCreateWithoutChamberInput {
    id?: string;
    address?: string;
    slug?: string;
    lat?: string;
    lng?: string;
    addressID?: string;
    hospital?: HospitalCreateOneWithoutLocationInput;
}

export class LocationCreateWithoutHospitalInput {
    id?: string;
    address?: string;
    slug?: string;
    lat?: string;
    lng?: string;
    addressID?: string;
    chamber?: ChamberCreateOneWithoutLocationInput;
}

export class LocationSubscriptionWhereInput {
    AND?: LocationSubscriptionWhereInput[];
    OR?: LocationSubscriptionWhereInput[];
    NOT?: LocationSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: LocationWhereInput;
}

export class LocationUpdateInput {
    address?: string;
    slug?: string;
    lat?: string;
    lng?: string;
    addressID?: string;
    hospital?: HospitalUpdateOneWithoutLocationInput;
    chamber?: ChamberUpdateOneWithoutLocationInput;
}

export class LocationUpdateManyMutationInput {
    address?: string;
    slug?: string;
    lat?: string;
    lng?: string;
    addressID?: string;
}

export class LocationUpdateOneWithoutChamberInput {
    create?: LocationCreateWithoutChamberInput;
    connect?: LocationWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: LocationUpdateWithoutChamberDataInput;
    upsert?: LocationUpsertWithoutChamberInput;
}

export class LocationUpdateOneWithoutHospitalInput {
    create?: LocationCreateWithoutHospitalInput;
    connect?: LocationWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: LocationUpdateWithoutHospitalDataInput;
    upsert?: LocationUpsertWithoutHospitalInput;
}

export class LocationUpdateWithoutChamberDataInput {
    address?: string;
    slug?: string;
    lat?: string;
    lng?: string;
    addressID?: string;
    hospital?: HospitalUpdateOneWithoutLocationInput;
}

export class LocationUpdateWithoutHospitalDataInput {
    address?: string;
    slug?: string;
    lat?: string;
    lng?: string;
    addressID?: string;
    chamber?: ChamberUpdateOneWithoutLocationInput;
}

export class LocationUpsertWithoutChamberInput {
    update: LocationUpdateWithoutChamberDataInput;
    create: LocationCreateWithoutChamberInput;
}

export class LocationUpsertWithoutHospitalInput {
    update: LocationUpdateWithoutHospitalDataInput;
    create: LocationCreateWithoutHospitalInput;
}

export class LocationWhereInput {
    AND?: LocationWhereInput[];
    OR?: LocationWhereInput[];
    NOT?: LocationWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    address?: string;
    address_not?: string;
    address_in?: string[];
    address_not_in?: string[];
    address_lt?: string;
    address_lte?: string;
    address_gt?: string;
    address_gte?: string;
    address_contains?: string;
    address_not_contains?: string;
    address_starts_with?: string;
    address_not_starts_with?: string;
    address_ends_with?: string;
    address_not_ends_with?: string;
    slug?: string;
    slug_not?: string;
    slug_in?: string[];
    slug_not_in?: string[];
    slug_lt?: string;
    slug_lte?: string;
    slug_gt?: string;
    slug_gte?: string;
    slug_contains?: string;
    slug_not_contains?: string;
    slug_starts_with?: string;
    slug_not_starts_with?: string;
    slug_ends_with?: string;
    slug_not_ends_with?: string;
    lat?: string;
    lat_not?: string;
    lat_in?: string[];
    lat_not_in?: string[];
    lat_lt?: string;
    lat_lte?: string;
    lat_gt?: string;
    lat_gte?: string;
    lat_contains?: string;
    lat_not_contains?: string;
    lat_starts_with?: string;
    lat_not_starts_with?: string;
    lat_ends_with?: string;
    lat_not_ends_with?: string;
    lng?: string;
    lng_not?: string;
    lng_in?: string[];
    lng_not_in?: string[];
    lng_lt?: string;
    lng_lte?: string;
    lng_gt?: string;
    lng_gte?: string;
    lng_contains?: string;
    lng_not_contains?: string;
    lng_starts_with?: string;
    lng_not_starts_with?: string;
    lng_ends_with?: string;
    lng_not_ends_with?: string;
    addressID?: string;
    addressID_not?: string;
    addressID_in?: string[];
    addressID_not_in?: string[];
    addressID_lt?: string;
    addressID_lte?: string;
    addressID_gt?: string;
    addressID_gte?: string;
    addressID_contains?: string;
    addressID_not_contains?: string;
    addressID_starts_with?: string;
    addressID_not_starts_with?: string;
    addressID_ends_with?: string;
    addressID_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    hospital?: HospitalWhereInput;
    chamber?: ChamberWhereInput;
}

export class LocationWhereUniqueInput {
    id?: string;
}

export class ProfileCreateInput {
    id?: string;
    phone: string;
    active?: boolean;
    hospital?: HospitalCreateOneWithoutProfileInput;
    doctor?: DoctorCreateOneWithoutProfileInput;
}

export class ProfileCreateOneWithoutDoctorInput {
    create?: ProfileCreateWithoutDoctorInput;
    connect?: ProfileWhereUniqueInput;
}

export class ProfileCreateOneWithoutHospitalInput {
    create?: ProfileCreateWithoutHospitalInput;
    connect?: ProfileWhereUniqueInput;
}

export class ProfileCreateWithoutDoctorInput {
    id?: string;
    phone: string;
    active?: boolean;
    hospital?: HospitalCreateOneWithoutProfileInput;
}

export class ProfileCreateWithoutHospitalInput {
    id?: string;
    phone: string;
    active?: boolean;
    doctor?: DoctorCreateOneWithoutProfileInput;
}

export class ProfileSubscriptionWhereInput {
    AND?: ProfileSubscriptionWhereInput[];
    OR?: ProfileSubscriptionWhereInput[];
    NOT?: ProfileSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: ProfileWhereInput;
}

export class ProfileUpdateInput {
    phone?: string;
    active?: boolean;
    hospital?: HospitalUpdateOneWithoutProfileInput;
    doctor?: DoctorUpdateOneWithoutProfileInput;
}

export class ProfileUpdateManyMutationInput {
    phone?: string;
    active?: boolean;
}

export class ProfileUpdateOneRequiredWithoutHospitalInput {
    create?: ProfileCreateWithoutHospitalInput;
    connect?: ProfileWhereUniqueInput;
    update?: ProfileUpdateWithoutHospitalDataInput;
    upsert?: ProfileUpsertWithoutHospitalInput;
}

export class ProfileUpdateOneWithoutDoctorInput {
    create?: ProfileCreateWithoutDoctorInput;
    connect?: ProfileWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: ProfileUpdateWithoutDoctorDataInput;
    upsert?: ProfileUpsertWithoutDoctorInput;
}

export class ProfileUpdateWithoutDoctorDataInput {
    phone?: string;
    active?: boolean;
    hospital?: HospitalUpdateOneWithoutProfileInput;
}

export class ProfileUpdateWithoutHospitalDataInput {
    phone?: string;
    active?: boolean;
    doctor?: DoctorUpdateOneWithoutProfileInput;
}

export class ProfileUpsertWithoutDoctorInput {
    update: ProfileUpdateWithoutDoctorDataInput;
    create: ProfileCreateWithoutDoctorInput;
}

export class ProfileUpsertWithoutHospitalInput {
    update: ProfileUpdateWithoutHospitalDataInput;
    create: ProfileCreateWithoutHospitalInput;
}

export class ProfileWhereInput {
    AND?: ProfileWhereInput[];
    OR?: ProfileWhereInput[];
    NOT?: ProfileWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    phone?: string;
    phone_not?: string;
    phone_in?: string[];
    phone_not_in?: string[];
    phone_lt?: string;
    phone_lte?: string;
    phone_gt?: string;
    phone_gte?: string;
    phone_contains?: string;
    phone_not_contains?: string;
    phone_starts_with?: string;
    phone_not_starts_with?: string;
    phone_ends_with?: string;
    phone_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    active?: boolean;
    active_not?: boolean;
    hospital?: HospitalWhereInput;
    doctor?: DoctorWhereInput;
}

export class ProfileWhereUniqueInput {
    id?: string;
}

export class UserCreateInput {
    id?: string;
    name: string;
    email: string;
    password: string;
    emailVerification?: boolean;
    roles?: UserRoles;
    doctor?: DoctorCreateOneWithoutUserInput;
    verifac?: VerificationCodeCreateOneWithoutUserInput;
    hospital?: HospitalCreateOneWithoutControllersInput;
}

export class UserCreateManyWithoutHospitalInput {
    create?: UserCreateWithoutHospitalInput[];
    connect?: UserWhereUniqueInput[];
}

export class UserCreateOneWithoutDoctorInput {
    create?: UserCreateWithoutDoctorInput;
    connect?: UserWhereUniqueInput;
}

export class UserCreateOneWithoutVerifacInput {
    create?: UserCreateWithoutVerifacInput;
    connect?: UserWhereUniqueInput;
}

export class UserCreateWithoutDoctorInput {
    id?: string;
    name: string;
    email: string;
    password: string;
    emailVerification?: boolean;
    roles?: UserRoles;
    verifac?: VerificationCodeCreateOneWithoutUserInput;
    hospital?: HospitalCreateOneWithoutControllersInput;
}

export class UserCreateWithoutHospitalInput {
    id?: string;
    name: string;
    email: string;
    password: string;
    emailVerification?: boolean;
    roles?: UserRoles;
    doctor?: DoctorCreateOneWithoutUserInput;
    verifac?: VerificationCodeCreateOneWithoutUserInput;
}

export class UserCreateWithoutVerifacInput {
    id?: string;
    name: string;
    email: string;
    password: string;
    emailVerification?: boolean;
    roles?: UserRoles;
    doctor?: DoctorCreateOneWithoutUserInput;
    hospital?: HospitalCreateOneWithoutControllersInput;
}

export class UserScalarWhereInput {
    AND?: UserScalarWhereInput[];
    OR?: UserScalarWhereInput[];
    NOT?: UserScalarWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    email?: string;
    email_not?: string;
    email_in?: string[];
    email_not_in?: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    password?: string;
    password_not?: string;
    password_in?: string[];
    password_not_in?: string[];
    password_lt?: string;
    password_lte?: string;
    password_gt?: string;
    password_gte?: string;
    password_contains?: string;
    password_not_contains?: string;
    password_starts_with?: string;
    password_not_starts_with?: string;
    password_ends_with?: string;
    password_not_ends_with?: string;
    emailVerification?: boolean;
    emailVerification_not?: boolean;
    roles?: UserRoles;
    roles_not?: UserRoles;
    roles_in?: UserRoles[];
    roles_not_in?: UserRoles[];
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
}

export class UserSubscriptionWhereInput {
    AND?: UserSubscriptionWhereInput[];
    OR?: UserSubscriptionWhereInput[];
    NOT?: UserSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: UserWhereInput;
}

export class UserUpdateInput {
    name?: string;
    email?: string;
    password?: string;
    emailVerification?: boolean;
    roles?: UserRoles;
    doctor?: DoctorUpdateOneWithoutUserInput;
    verifac?: VerificationCodeUpdateOneWithoutUserInput;
    hospital?: HospitalUpdateOneWithoutControllersInput;
}

export class UserUpdateManyDataInput {
    name?: string;
    email?: string;
    password?: string;
    emailVerification?: boolean;
    roles?: UserRoles;
}

export class UserUpdateManyMutationInput {
    name?: string;
    email?: string;
    password?: string;
    emailVerification?: boolean;
    roles?: UserRoles;
}

export class UserUpdateManyWithoutHospitalInput {
    create?: UserCreateWithoutHospitalInput[];
    connect?: UserWhereUniqueInput[];
    set?: UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput[];
    update?: UserUpdateWithWhereUniqueWithoutHospitalInput[];
    updateMany?: UserUpdateManyWithWhereNestedInput[];
    deleteMany?: UserScalarWhereInput[];
    upsert?: UserUpsertWithWhereUniqueWithoutHospitalInput[];
}

export class UserUpdateManyWithWhereNestedInput {
    where: UserScalarWhereInput;
    data: UserUpdateManyDataInput;
}

export class UserUpdateOneRequiredWithoutDoctorInput {
    create?: UserCreateWithoutDoctorInput;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutDoctorDataInput;
    upsert?: UserUpsertWithoutDoctorInput;
}

export class UserUpdateOneWithoutVerifacInput {
    create?: UserCreateWithoutVerifacInput;
    connect?: UserWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: UserUpdateWithoutVerifacDataInput;
    upsert?: UserUpsertWithoutVerifacInput;
}

export class UserUpdateWithoutDoctorDataInput {
    name?: string;
    email?: string;
    password?: string;
    emailVerification?: boolean;
    roles?: UserRoles;
    verifac?: VerificationCodeUpdateOneWithoutUserInput;
    hospital?: HospitalUpdateOneWithoutControllersInput;
}

export class UserUpdateWithoutHospitalDataInput {
    name?: string;
    email?: string;
    password?: string;
    emailVerification?: boolean;
    roles?: UserRoles;
    doctor?: DoctorUpdateOneWithoutUserInput;
    verifac?: VerificationCodeUpdateOneWithoutUserInput;
}

export class UserUpdateWithoutVerifacDataInput {
    name?: string;
    email?: string;
    password?: string;
    emailVerification?: boolean;
    roles?: UserRoles;
    doctor?: DoctorUpdateOneWithoutUserInput;
    hospital?: HospitalUpdateOneWithoutControllersInput;
}

export class UserUpdateWithWhereUniqueWithoutHospitalInput {
    where: UserWhereUniqueInput;
    data: UserUpdateWithoutHospitalDataInput;
}

export class UserUpsertWithoutDoctorInput {
    update: UserUpdateWithoutDoctorDataInput;
    create: UserCreateWithoutDoctorInput;
}

export class UserUpsertWithoutVerifacInput {
    update: UserUpdateWithoutVerifacDataInput;
    create: UserCreateWithoutVerifacInput;
}

export class UserUpsertWithWhereUniqueWithoutHospitalInput {
    where: UserWhereUniqueInput;
    update: UserUpdateWithoutHospitalDataInput;
    create: UserCreateWithoutHospitalInput;
}

export class UserWhereInput {
    AND?: UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    name?: string;
    name_not?: string;
    name_in?: string[];
    name_not_in?: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    email?: string;
    email_not?: string;
    email_in?: string[];
    email_not_in?: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    password?: string;
    password_not?: string;
    password_in?: string[];
    password_not_in?: string[];
    password_lt?: string;
    password_lte?: string;
    password_gt?: string;
    password_gte?: string;
    password_contains?: string;
    password_not_contains?: string;
    password_starts_with?: string;
    password_not_starts_with?: string;
    password_ends_with?: string;
    password_not_ends_with?: string;
    emailVerification?: boolean;
    emailVerification_not?: boolean;
    roles?: UserRoles;
    roles_not?: UserRoles;
    roles_in?: UserRoles[];
    roles_not_in?: UserRoles[];
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    doctor?: DoctorWhereInput;
    verifac?: VerificationCodeWhereInput;
    hospital?: HospitalWhereInput;
}

export class UserWhereUniqueInput {
    id?: string;
    email?: string;
}

export class VerificationCodeCreateInput {
    id?: string;
    uid: string;
    user?: UserCreateOneWithoutVerifacInput;
    doctor?: DoctorCreateOneWithoutVerifacInput;
}

export class VerificationCodeCreateOneWithoutDoctorInput {
    create?: VerificationCodeCreateWithoutDoctorInput;
    connect?: VerificationCodeWhereUniqueInput;
}

export class VerificationCodeCreateOneWithoutUserInput {
    create?: VerificationCodeCreateWithoutUserInput;
    connect?: VerificationCodeWhereUniqueInput;
}

export class VerificationCodeCreateWithoutDoctorInput {
    id?: string;
    uid: string;
    user?: UserCreateOneWithoutVerifacInput;
}

export class VerificationCodeCreateWithoutUserInput {
    id?: string;
    uid: string;
    doctor?: DoctorCreateOneWithoutVerifacInput;
}

export class VerificationCodeSubscriptionWhereInput {
    AND?: VerificationCodeSubscriptionWhereInput[];
    OR?: VerificationCodeSubscriptionWhereInput[];
    NOT?: VerificationCodeSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: VerificationCodeWhereInput;
}

export class VerificationCodeUpdateInput {
    uid?: string;
    user?: UserUpdateOneWithoutVerifacInput;
    doctor?: DoctorUpdateOneWithoutVerifacInput;
}

export class VerificationCodeUpdateManyMutationInput {
    uid?: string;
}

export class VerificationCodeUpdateOneWithoutDoctorInput {
    create?: VerificationCodeCreateWithoutDoctorInput;
    connect?: VerificationCodeWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: VerificationCodeUpdateWithoutDoctorDataInput;
    upsert?: VerificationCodeUpsertWithoutDoctorInput;
}

export class VerificationCodeUpdateOneWithoutUserInput {
    create?: VerificationCodeCreateWithoutUserInput;
    connect?: VerificationCodeWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: VerificationCodeUpdateWithoutUserDataInput;
    upsert?: VerificationCodeUpsertWithoutUserInput;
}

export class VerificationCodeUpdateWithoutDoctorDataInput {
    uid?: string;
    user?: UserUpdateOneWithoutVerifacInput;
}

export class VerificationCodeUpdateWithoutUserDataInput {
    uid?: string;
    doctor?: DoctorUpdateOneWithoutVerifacInput;
}

export class VerificationCodeUpsertWithoutDoctorInput {
    update: VerificationCodeUpdateWithoutDoctorDataInput;
    create: VerificationCodeCreateWithoutDoctorInput;
}

export class VerificationCodeUpsertWithoutUserInput {
    update: VerificationCodeUpdateWithoutUserDataInput;
    create: VerificationCodeCreateWithoutUserInput;
}

export class VerificationCodeWhereInput {
    AND?: VerificationCodeWhereInput[];
    OR?: VerificationCodeWhereInput[];
    NOT?: VerificationCodeWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    uid?: string;
    uid_not?: string;
    uid_in?: string[];
    uid_not_in?: string[];
    uid_lt?: string;
    uid_lte?: string;
    uid_gt?: string;
    uid_gte?: string;
    uid_contains?: string;
    uid_not_contains?: string;
    uid_starts_with?: string;
    uid_not_starts_with?: string;
    uid_ends_with?: string;
    uid_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
    user?: UserWhereInput;
    doctor?: DoctorWhereInput;
}

export class VerificationCodeWhereUniqueInput {
    id?: string;
}

export interface Node {
    id: string;
}

export class AggregateAppointment {
    count: number;
}

export class AggregateAttending {
    count: number;
}

export class AggregateChamber {
    count: number;
}

export class AggregateDoctor {
    count: number;
}

export class AggregateHospital {
    count: number;
}

export class AggregateLocation {
    count: number;
}

export class AggregateProfile {
    count: number;
}

export class AggregateUser {
    count: number;
}

export class AggregateVerificationCode {
    count: number;
}

export class Appointment implements Node {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    start_time: DateTime;
    end_time: DateTime;
    chamber?: Chamber;
    hospital?: Hospital;
}

export class AppointmentConnection {
    pageInfo: PageInfo;
    edges: AppointmentEdge[];
    aggregate: AggregateAppointment;
}

export class AppointmentEdge {
    node: Appointment;
    cursor: string;
}

export class AppointmentPreviousValues {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    start_time: DateTime;
    end_time: DateTime;
}

export class AppointmentSubscriptionPayload {
    mutation: MutationType;
    node?: Appointment;
    updatedFields?: string[];
    previousValues?: AppointmentPreviousValues;
}

export class Attending implements Node {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    doctor?: Doctor;
    chamber?: Chamber[];
}

export class AttendingConnection {
    pageInfo: PageInfo;
    edges: AttendingEdge[];
    aggregate: AggregateAttending;
}

export class AttendingEdge {
    node: Attending;
    cursor: string;
}

export class AttendingPreviousValues {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class AttendingSubscriptionPayload {
    mutation: MutationType;
    node?: Attending;
    updatedFields?: string[];
    previousValues?: AttendingPreviousValues;
}

export class BatchPayload {
    count: Long;
}

export class Chamber implements Node {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    name: string;
    start_time: DateTime;
    end_time: DateTime;
    attending?: Attending[];
    appointments?: Appointment[];
    doctor?: Doctor[];
    location?: Location;
}

export class ChamberConnection {
    pageInfo: PageInfo;
    edges: ChamberEdge[];
    aggregate: AggregateChamber;
}

export class ChamberEdge {
    node: Chamber;
    cursor: string;
}

export class ChamberPreviousValues {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    name: string;
    start_time: DateTime;
    end_time: DateTime;
}

export class ChamberSubscriptionPayload {
    mutation: MutationType;
    node?: Chamber;
    updatedFields?: string[];
    previousValues?: ChamberPreviousValues;
}

export class Doctor implements Node {
    id: string;
    name: string;
    specialization: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
    user: User;
    attending?: Attending[];
    chamber?: Chamber[];
    verifac?: VerificationCode;
    profile?: Profile;
}

export class DoctorConnection {
    pageInfo: PageInfo;
    edges: DoctorEdge[];
    aggregate: AggregateDoctor;
}

export class DoctorEdge {
    node: Doctor;
    cursor: string;
}

export class DoctorPreviousValues {
    id: string;
    name: string;
    specialization: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    emailVerification?: boolean;
    phone?: string;
    address?: string;
    state?: string;
    zip?: string;
}

export class DoctorSubscriptionPayload {
    mutation: MutationType;
    node?: Doctor;
    updatedFields?: string[];
    previousValues?: DoctorPreviousValues;
}

export class Hospital implements Node {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    emailVerification?: boolean;
    name: string;
    profile: Profile;
    controllers?: User[];
    appointments?: Appointment[];
    location?: Location;
}

export class HospitalConnection {
    pageInfo: PageInfo;
    edges: HospitalEdge[];
    aggregate: AggregateHospital;
}

export class HospitalEdge {
    node: Hospital;
    cursor: string;
}

export class HospitalPreviousValues {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    emailVerification?: boolean;
    name: string;
}

export class HospitalSubscriptionPayload {
    mutation: MutationType;
    node?: Hospital;
    updatedFields?: string[];
    previousValues?: HospitalPreviousValues;
}

export class Location implements Node {
    id: string;
    address?: string;
    slug?: string;
    lat?: string;
    lng?: string;
    addressID?: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    hospital?: Hospital;
    chamber?: Chamber;
}

export class LocationConnection {
    pageInfo: PageInfo;
    edges: LocationEdge[];
    aggregate: AggregateLocation;
}

export class LocationEdge {
    node: Location;
    cursor: string;
}

export class LocationPreviousValues {
    id: string;
    address?: string;
    slug?: string;
    lat?: string;
    lng?: string;
    addressID?: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class LocationSubscriptionPayload {
    mutation: MutationType;
    node?: Location;
    updatedFields?: string[];
    previousValues?: LocationPreviousValues;
}

export abstract class IMutation {
    abstract createUser(data: UserCreateInput): User | Promise<User>;
    abstract createProfile(data: ProfileCreateInput): Profile | Promise<Profile>;
    abstract createLocation(data: LocationCreateInput): Location | Promise<Location>;
    abstract createDoctor(data: DoctorCreateInput): Doctor | Promise<Doctor>;
    abstract createAppointment(data: AppointmentCreateInput): Appointment | Promise<Appointment>;
    abstract createHospital(data: HospitalCreateInput): Hospital | Promise<Hospital>;
    abstract createAttending(data: AttendingCreateInput): Attending | Promise<Attending>;
    abstract createChamber(data: ChamberCreateInput): Chamber | Promise<Chamber>;
    abstract createVerificationCode(data: VerificationCodeCreateInput): VerificationCode | Promise<VerificationCode>;
    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;
    abstract updateProfile(data: ProfileUpdateInput, where: ProfileWhereUniqueInput): Profile | Promise<Profile>;
    abstract updateLocation(data: LocationUpdateInput, where: LocationWhereUniqueInput): Location | Promise<Location>;
    abstract updateDoctor(data: DoctorUpdateInput, where: DoctorWhereUniqueInput): Doctor | Promise<Doctor>;
    abstract updateAppointment(data: AppointmentUpdateInput, where: AppointmentWhereUniqueInput): Appointment | Promise<Appointment>;
    abstract updateHospital(data: HospitalUpdateInput, where: HospitalWhereUniqueInput): Hospital | Promise<Hospital>;
    abstract updateAttending(data: AttendingUpdateInput, where: AttendingWhereUniqueInput): Attending | Promise<Attending>;
    abstract updateChamber(data: ChamberUpdateInput, where: ChamberWhereUniqueInput): Chamber | Promise<Chamber>;
    abstract updateVerificationCode(data: VerificationCodeUpdateInput, where: VerificationCodeWhereUniqueInput): VerificationCode | Promise<VerificationCode>;
    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;
    abstract deleteProfile(where: ProfileWhereUniqueInput): Profile | Promise<Profile>;
    abstract deleteLocation(where: LocationWhereUniqueInput): Location | Promise<Location>;
    abstract deleteDoctor(where: DoctorWhereUniqueInput): Doctor | Promise<Doctor>;
    abstract deleteAppointment(where: AppointmentWhereUniqueInput): Appointment | Promise<Appointment>;
    abstract deleteHospital(where: HospitalWhereUniqueInput): Hospital | Promise<Hospital>;
    abstract deleteAttending(where: AttendingWhereUniqueInput): Attending | Promise<Attending>;
    abstract deleteChamber(where: ChamberWhereUniqueInput): Chamber | Promise<Chamber>;
    abstract deleteVerificationCode(where: VerificationCodeWhereUniqueInput): VerificationCode | Promise<VerificationCode>;
    abstract upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;
    abstract upsertProfile(where: ProfileWhereUniqueInput, create: ProfileCreateInput, update: ProfileUpdateInput): Profile | Promise<Profile>;
    abstract upsertLocation(where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput): Location | Promise<Location>;
    abstract upsertDoctor(where: DoctorWhereUniqueInput, create: DoctorCreateInput, update: DoctorUpdateInput): Doctor | Promise<Doctor>;
    abstract upsertAppointment(where: AppointmentWhereUniqueInput, create: AppointmentCreateInput, update: AppointmentUpdateInput): Appointment | Promise<Appointment>;
    abstract upsertHospital(where: HospitalWhereUniqueInput, create: HospitalCreateInput, update: HospitalUpdateInput): Hospital | Promise<Hospital>;
    abstract upsertAttending(where: AttendingWhereUniqueInput, create: AttendingCreateInput, update: AttendingUpdateInput): Attending | Promise<Attending>;
    abstract upsertChamber(where: ChamberWhereUniqueInput, create: ChamberCreateInput, update: ChamberUpdateInput): Chamber | Promise<Chamber>;
    abstract upsertVerificationCode(where: VerificationCodeWhereUniqueInput, create: VerificationCodeCreateInput, update: VerificationCodeUpdateInput): VerificationCode | Promise<VerificationCode>;
    abstract updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyProfiles(data: ProfileUpdateManyMutationInput, where?: ProfileWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyLocations(data: LocationUpdateManyMutationInput, where?: LocationWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyDoctors(data: DoctorUpdateManyMutationInput, where?: DoctorWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyAppointments(data: AppointmentUpdateManyMutationInput, where?: AppointmentWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyHospitals(data: HospitalUpdateManyMutationInput, where?: HospitalWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyChambers(data: ChamberUpdateManyMutationInput, where?: ChamberWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyVerificationCodes(data: VerificationCodeUpdateManyMutationInput, where?: VerificationCodeWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyProfiles(where?: ProfileWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyLocations(where?: LocationWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyDoctors(where?: DoctorWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyAppointments(where?: AppointmentWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyHospitals(where?: HospitalWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyAttendings(where?: AttendingWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyChambers(where?: ChamberWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyVerificationCodes(where?: VerificationCodeWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract executeRaw(database?: PrismaDatabase, query: string): Json | Promise<Json>;
    abstract createNewUser(email?: string, name?: string, password?: string): UserResponse | Promise<UserResponse>;
    abstract signIn(email?: string, password?: string): UserResponse | Promise<UserResponse>;
    abstract escalateRoles(id?: string, role?: string): User | Promise<User>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export class Profile implements Node {
    id: string;
    phone: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    active?: boolean;
    hospital?: Hospital;
    doctor?: Doctor;
}

export class ProfileConnection {
    pageInfo: PageInfo;
    edges: ProfileEdge[];
    aggregate: AggregateProfile;
}

export class ProfileEdge {
    node: Profile;
    cursor: string;
}

export class ProfilePreviousValues {
    id: string;
    phone: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    active?: boolean;
}

export class ProfileSubscriptionPayload {
    mutation: MutationType;
    node?: Profile;
    updatedFields?: string[];
    previousValues?: ProfilePreviousValues;
}

export abstract class IQuery {
    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;
    abstract profiles(where?: ProfileWhereInput, orderBy?: ProfileOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Profile[] | Promise<Profile[]>;
    abstract locations(where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Location[] | Promise<Location[]>;
    abstract doctors(where?: DoctorWhereInput, orderBy?: DoctorOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Doctor[] | Promise<Doctor[]>;
    abstract appointments(where?: AppointmentWhereInput, orderBy?: AppointmentOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Appointment[] | Promise<Appointment[]>;
    abstract hospitals(where?: HospitalWhereInput, orderBy?: HospitalOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Hospital[] | Promise<Hospital[]>;
    abstract attendings(where?: AttendingWhereInput, orderBy?: AttendingOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Attending[] | Promise<Attending[]>;
    abstract chambers(where?: ChamberWhereInput, orderBy?: ChamberOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Chamber[] | Promise<Chamber[]>;
    abstract verificationCodes(where?: VerificationCodeWhereInput, orderBy?: VerificationCodeOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): VerificationCode[] | Promise<VerificationCode[]>;
    abstract user(where: UserWhereUniqueInput): User | Promise<User>;
    abstract profile(where: ProfileWhereUniqueInput): Profile | Promise<Profile>;
    abstract location(where: LocationWhereUniqueInput): Location | Promise<Location>;
    abstract doctor(where: DoctorWhereUniqueInput): Doctor | Promise<Doctor>;
    abstract appointment(where: AppointmentWhereUniqueInput): Appointment | Promise<Appointment>;
    abstract hospital(where: HospitalWhereUniqueInput): Hospital | Promise<Hospital>;
    abstract attending(where: AttendingWhereUniqueInput): Attending | Promise<Attending>;
    abstract chamber(where: ChamberWhereUniqueInput): Chamber | Promise<Chamber>;
    abstract verificationCode(where: VerificationCodeWhereUniqueInput): VerificationCode | Promise<VerificationCode>;
    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;
    abstract profilesConnection(where?: ProfileWhereInput, orderBy?: ProfileOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): ProfileConnection | Promise<ProfileConnection>;
    abstract locationsConnection(where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): LocationConnection | Promise<LocationConnection>;
    abstract doctorsConnection(where?: DoctorWhereInput, orderBy?: DoctorOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): DoctorConnection | Promise<DoctorConnection>;
    abstract appointmentsConnection(where?: AppointmentWhereInput, orderBy?: AppointmentOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): AppointmentConnection | Promise<AppointmentConnection>;
    abstract hospitalsConnection(where?: HospitalWhereInput, orderBy?: HospitalOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): HospitalConnection | Promise<HospitalConnection>;
    abstract attendingsConnection(where?: AttendingWhereInput, orderBy?: AttendingOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): AttendingConnection | Promise<AttendingConnection>;
    abstract chambersConnection(where?: ChamberWhereInput, orderBy?: ChamberOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): ChamberConnection | Promise<ChamberConnection>;
    abstract verificationCodesConnection(where?: VerificationCodeWhereInput, orderBy?: VerificationCodeOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): VerificationCodeConnection | Promise<VerificationCodeConnection>;
    abstract node(id: string): Node | Promise<Node>;
    abstract currentUser(): User | Promise<User>;
    abstract normalUsers(): User[] | Promise<User[]>;
    abstract getUserByID(id: string): UserResponse | Promise<UserResponse>;
}

export abstract class ISubscription {
    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;
    abstract profile(where?: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload | Promise<ProfileSubscriptionPayload>;
    abstract location(where?: LocationSubscriptionWhereInput): LocationSubscriptionPayload | Promise<LocationSubscriptionPayload>;
    abstract doctor(where?: DoctorSubscriptionWhereInput): DoctorSubscriptionPayload | Promise<DoctorSubscriptionPayload>;
    abstract appointment(where?: AppointmentSubscriptionWhereInput): AppointmentSubscriptionPayload | Promise<AppointmentSubscriptionPayload>;
    abstract hospital(where?: HospitalSubscriptionWhereInput): HospitalSubscriptionPayload | Promise<HospitalSubscriptionPayload>;
    abstract attending(where?: AttendingSubscriptionWhereInput): AttendingSubscriptionPayload | Promise<AttendingSubscriptionPayload>;
    abstract chamber(where?: ChamberSubscriptionWhereInput): ChamberSubscriptionPayload | Promise<ChamberSubscriptionPayload>;
    abstract verificationCode(where?: VerificationCodeSubscriptionWhereInput): VerificationCodeSubscriptionPayload | Promise<VerificationCodeSubscriptionPayload>;
}

export class User implements Node {
    id: string;
    name: string;
    email: string;
    password: string;
    emailVerification?: boolean;
    roles?: UserRoles;
    createdAt: DateTime;
    updatedAt: DateTime;
    doctor?: Doctor;
    verifac?: VerificationCode;
    hospital?: Hospital;
}

export class UserConnection {
    pageInfo: PageInfo;
    edges: UserEdge[];
    aggregate: AggregateUser;
}

export class UserEdge {
    node: User;
    cursor: string;
}

export class UserPreviousValues {
    id: string;
    name: string;
    email: string;
    password: string;
    emailVerification?: boolean;
    roles?: UserRoles;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class UserResponse {
    user?: User;
    token?: string;
    error?: string;
}

export class UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields?: string[];
    previousValues?: UserPreviousValues;
}

export class VerificationCode implements Node {
    id: string;
    uid: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    user?: User;
    doctor?: Doctor;
}

export class VerificationCodeConnection {
    pageInfo: PageInfo;
    edges: VerificationCodeEdge[];
    aggregate: AggregateVerificationCode;
}

export class VerificationCodeEdge {
    node: VerificationCode;
    cursor: string;
}

export class VerificationCodePreviousValues {
    id: string;
    uid: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class VerificationCodeSubscriptionPayload {
    mutation: MutationType;
    node?: VerificationCode;
    updatedFields?: string[];
    previousValues?: VerificationCodePreviousValues;
}

export type DateTime = any;
export type Json = any;
export type Long = any;
