import axios from "axios";

export default {
  // Gets all jobs
  getJobs: function() {
    return axios.get("/api/pesa");
  },
  // Gets job with the given id
  getJob: function(id) {
    return axios.get("/api/pesa/"+id);
  },
  // Deletes job with the given id
  deleteJob: function(id) {
    return axios.delete("/api/pesa/"+id);
  },
  // Saves job to the database
  saveJob: function(jobData) {
    return axios.post("/pesa", jobData);
  },
  // Edits job saved in database
  editJob: function(id, jobData) {
    return axios.put("/api/pesa/"+id, jobData)
  },

  search: function(title,location) {

    // let url = "http://api.indeed.com/ads/apisearch?publisher="+publisheId+"&q="+title+"&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2"
    // return axios.get()
  }
};