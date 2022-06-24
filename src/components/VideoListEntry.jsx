
var VideoListEntry = (props) => (

   <div>

     {

   props.data2.map((el)=>
    <div className="video-list-entry media">
      {console.log(el)}
    <div className="media-left media-middle">
      <img className="media-object" src={el.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{el.snippet.title} </div>
      <div className="video-list-entry-detail">{el.snippet.description} </div>
    </div>
    </div>

  )}
  </div>

);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;