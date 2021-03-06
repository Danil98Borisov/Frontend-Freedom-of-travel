export class AppApiConst {
  public static API_ENDPOINT = 'http://localhost:8050/api';

  public static SIGN_IN = AppApiConst.API_ENDPOINT + '/auth/signin';
  public static SIGN_OUT = AppApiConst.API_ENDPOINT + '/auth/signout';
  public static SIGN_UP = AppApiConst.API_ENDPOINT + '/signup';
  public static VERIFY_USER_EMAIL = AppApiConst.API_ENDPOINT + '/verify-user-email';

  public static HOTEL_ALL = AppApiConst.API_ENDPOINT + '/hotel/all';
  public static HOTEL_ADD = AppApiConst.API_ENDPOINT + '/hotel/add';
  public static HOTEL_EDIT = AppApiConst.API_ENDPOINT + '/hotel/edit';
  public static HOTEL_DELETE = AppApiConst.API_ENDPOINT + '/hotel/delete';

  public static APARTMENT_ALL = AppApiConst.API_ENDPOINT + '/apartment/all';
  public static APARTMENT_DETAILS = AppApiConst.API_ENDPOINT + '/apartment/details';
  public static APARTMENT_DETAILS_EDIT = AppApiConst.API_ENDPOINT + '/apartment/details/edit';
  public static APARTMENT_FIND = AppApiConst.API_ENDPOINT + '/apartment/find';
  public static APARTMENT_IN_HOTEL = AppApiConst.API_ENDPOINT+'/apartment/apart-in-hotel'

  public static APARTMENT_PREVIEW_FIND = AppApiConst.API_ENDPOINT + '/apartmentPreview/find/preview';
  public static APARTMENT_PREVIEW_DETAILS = AppApiConst.API_ENDPOINT + '/apartmentPreview/details/preview';

  public static HOTEL_DETAILS = AppApiConst.API_ENDPOINT + '/hotel/details';
  public static HOTEL_DETAILS_EDIT = AppApiConst.API_ENDPOINT + '/hotel/details/edit';

  public static HOTEL_PREVIEW_DETAILS = AppApiConst.API_ENDPOINT + '/hotelPreview/details/preview';
  public static HOTEL_PREVIEW_FIND = AppApiConst.API_ENDPOINT + '/hotelPreview/find/preview';

  public static RESERVATION_ALL = AppApiConst.API_ENDPOINT + '/reservation/all';
  public static RESERVATION_ALL_PAGINATED = AppApiConst.API_ENDPOINT + '/reservation/all/paginated';
  public static RESERVATION_ADD = AppApiConst.API_ENDPOINT + '/reservation/add';
  public static RESERVATION_CANCEL = AppApiConst.API_ENDPOINT + '/reservation/cancel';
  public static EMAIL_TO_RESERVATION = AppApiConst.API_ENDPOINT +'/reservation-user-email';

  public static OCCUPIED_APARTMENT = AppApiConst.API_ENDPOINT + '/reservation/find/reservation';

  public static BOOKING = AppApiConst.API_ENDPOINT + '/reservation/booking';

  public static HOTEL_MANAGEMENT = AppApiConst.API_ENDPOINT + '/hotel/manage-hotel';
  public static HOTEL_MANAGEMENT_ALL = AppApiConst.API_ENDPOINT + '/hotel/manage-hotel/all';
  public static HOTEL_ALL_PAGINATED = AppApiConst.API_ENDPOINT + '/hotel/all/paginated';

  public static USER_NON_ADMINS = AppApiConst.API_ENDPOINT + '/user/all-non-admin';
  public static USER_UPDATE_ROLES_ADMIN = AppApiConst.API_ENDPOINT + '/user/make-admin';
  public static USER_ALL = AppApiConst.API_ENDPOINT + '/user/all';
  public static USER_ALL_PAGINATED = AppApiConst.API_ENDPOINT + '/user/all/paginated';
}
