export class AppApiConst {
  public static API_ENDPOINT = 'http://localhost:8050/api';
  public static AUTH_API = AppApiConst.API_ENDPOINT + '/api/auth/';

  public static HOTEL_ALL = AppApiConst.API_ENDPOINT + '/hotel/all';
  public static HOTEL_ADD = AppApiConst.API_ENDPOINT + '/hotel/add';
  public static HOTEL_EDIT = AppApiConst.API_ENDPOINT + '/hotel/edit';
  public static HOTEL_DELETE = AppApiConst.API_ENDPOINT + '/hotel/delete';

  public static APARTMENT_ALL = AppApiConst.API_ENDPOINT + '/apartment/all';
  public static APARTMENT_DETAILS = AppApiConst.API_ENDPOINT + '/apartment/details';
  public static APARTMENT_DETAILS_EDIT = AppApiConst.API_ENDPOINT + '/apartment/details/edit';
  public static APARTMENT_FIND = AppApiConst.API_ENDPOINT + '/apartment/find';

  public static APARTMENT_PREVIEW_FIND = AppApiConst.API_ENDPOINT + '/apartmentPreview/find/preview';
  public static APARTMENT_PREVIEW_DETAILS = AppApiConst.API_ENDPOINT + '/apartmentPreview/details/preview';

  public static HOTEL_DETAILS = AppApiConst.API_ENDPOINT + '/hotel/details';
  public static HOTEL_DETAILS_EDIT = AppApiConst.API_ENDPOINT + '/hotel/details/edit';

  public static HOTEL_PREVIEW_DETAILS = AppApiConst.API_ENDPOINT + '/hotelPreview/details/preview';
  public static HOTEL_PREVIEW_FIND = AppApiConst.API_ENDPOINT + '/hotelPreview/find/preview';

  public static RESERVATION_ALL = AppApiConst.API_ENDPOINT + '/reservation/all';
  public static RESERVATION_ADD = AppApiConst.API_ENDPOINT + '/reservation/add';
}
