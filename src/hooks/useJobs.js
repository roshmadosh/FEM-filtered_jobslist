import { useEffect, useState } from "react"

export function useJobs() {
    const [jobs, setJobs] = useState();

    useEffect(() => {
      fetch('../../data.json')
        .then(data => data.json())
        .then(json => setJobs(json));
    }, []);

    function getRoles() {
      return jobs && jobs.map(job => job.role);
    }

    function getLevels() {
      return jobs && jobs.map(job => job.level);
    }

    function getLocations() {
      return jobs && jobs.map(job => job.location);
    }

    function getLanguages() {
      return jobs && jobs.map(job => job.languages);
    }

    const fetchers = {
      role: getRoles,
      level: getLevels,
      location: getLocations,
      language: getLanguages,
    };

    return [jobs, fetchers];
}