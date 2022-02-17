import React from "react";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import "./style.css";
import RepoItem from "../RepoItem";
import githubMascot from "../../assets/Octocat.png";

const RepoList = ({ repositories }) => {
  const renderList = () =>
    repositories.map((repository) => {
      return <RepoItem key={repository.id} repository={repository} />;
    });

  return (
    <div className="repo-list-container shadow-6">
      {repositories.length > 0 && (
        <h2>
          {" "}
          <span className="repo-icon">
            <Inventory2Icon />{" "}
          </span>{" "}
          Repositories{" "}
        </h2>
      )}
      {repositories.length > 0 ? (
        renderList()
      ) : (
        <div>
          <h3 className="welcome-message message">
            Enter a GitHub user name in the search bar to get the user's public
            repositories!
          </h3>
          <img src={githubMascot} className="mascot-img" />
        </div>
      )}
    </div>
  );
};

export default RepoList;
