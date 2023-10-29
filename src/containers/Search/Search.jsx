import swal from "sweetalert";

const Search = () => {
  const showSearchModal = () => {
    swal({
      text: 'Search for a note. e.g. "Hanko Auth Usages".',
      content: "input",
      button: {
        text: "Search!",
        closeModal: false,
      },
    })
      .then((name) => {
        if (!name) throw null;

        return fetch(
          `https://itunes.apple.com/search?term=${name}&entity=movie`
        );
      })
      .then((results) => {
        return results.json();
      })
      .then((json) => {
        const movie = json.results[0];

        if (!movie) {
          return swal("No movie was found!");
        }

        const name = movie.trackName;
        const imageURL = movie.artworkUrl100;

        swal({
          title: "Top result:",
          text: name,
          icon: imageURL,
        });
      })
      .catch((err) => {
        if (err) {
          swal("Oh noes!", "The AJAX request failed!", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
  };
  return (
    <li
      className="md:search relative cursor-pointer p-1"
      onClick={showSearchModal}
    >
      {/* Search Container */}
      <input
        type="text"
        name="note"
        className="hidden md:block border-b text-black text-sm h-9 leading-7 pt-0 pr-3 pl-10  outline-none font-poppins overflow-hidden"
        autoComplete="off"
        placeholder="Search note..."
      />
      <span className="md:absolute left-1 top-2">
        <i className="bx bx-search bx-sm text-nav-blue"></i>
      </span>
    </li>
  );
};

export default Search;
