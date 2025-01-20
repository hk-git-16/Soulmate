import { toast } from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { therapistEndpoints } from "../apis";

const {
  EDIT_THERAPIST_API,
  ADD_THERAPIST_API,
  FETCH_THERAPISTS_API,
} = therapistEndpoints;

/**
 * Fetch all therapists
 */
export function getAllTherapists() {
  return async (dispatch) => {
    try {
      const response = await apiConnector("GET", FETCH_THERAPISTS_API);

      console.log("GET ALL THERAPISTS RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      return response.data.data;
    } catch (error) {
      console.log("GET ALL THERAPISTS ERROR............", error);
      toast.error("Failed to fetch therapists");
      return [];
    }
  };
}

export function addTherapist(therapistData, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Adding therapist...");
    try {
      const response = await apiConnector("POST", ADD_THERAPIST_API, therapistData);

      console.log("ADD THERAPIST RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      navigate("/therapists");
    } catch (error) {
      console.log("ADD THERAPIST ERROR............", error);
      toast.error("Failed to add therapist");
    }
  };
}


export function editTherapist(therapistId, updatedData, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Updating therapist...");
    try {
      const response = await apiConnector("PUT", `${EDIT_THERAPIST_API}/${therapistId}`, updatedData);

      console.log("EDIT THERAPIST RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      navigate("/therapists");
    } catch (error) {
      console.log("EDIT THERAPIST ERROR............", error);
    }     
  };
}
