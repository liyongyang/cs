import http from "@/utils/http";

const tansParams = (params) => {
  let result = "";
  Object.keys(params).forEach((key) => {
    if (
      !Object.is(params[key], undefined) &&
      !Object.is(params[key], null) &&
      !Object.is(JSON.stringify(params[key]), "{}")
    ) {
      result +=
        encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&";
    }
  });
  return result;
};

const config = {
  transformRequest: [tansParams],
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  responseType: "blob",
};

class Sys {
  getEvaluationList(params: any) {
    return http.get<any>("/t-evaluation-info/getEvaluationList", { params });
  }

  addEvaluation(params: any) {
    return http.post<any>("/t-evaluation-info/addEvaluation", params);
  }

  editEvaluation(params: any) {
    return http.put<any>("/t-evaluation-info/updateEvaluation", params, config);
  }

  deleteEvaluation(params: any) {
    return http.delete<any>("t-evaluation-info/delByIds", { data: params });
  }
}

export const sys = new Sys();
