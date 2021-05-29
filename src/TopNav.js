function TopNav() {
  return (
    <div>
      <a href="#" class="active">All</a>
      <a href="#">Articles</a>
      <a href="#">Podcast</a>
      <div class="dropdown d-sm-inline d-md-none d-lg-none">
        <button class="btn dropdown-toggle" type="button" id="dropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownButton">
          <li><a class="dropdown-item" href="#">Video</a></li>
          <li><a class="dropdown-item" href="#">Downloads</a></li>
          <li><button class="btn btn-primary dropdown-item">Play All</button></li>
        </ul>
      </div>
      <div id="expandDropDown" class="d-none d-md-inline d-lg-inline">
        <a href="#">Video</a>
        <a href="#">Downloads</a>
        <button class="btn btn-primary">Play All</button>
      </div>
    </div>
  )
}

export default TopNav;