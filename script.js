function set_pivotal_story_id_visible() {
  var list = document.getElementsByClassName('tracker_markup');
  var i;
  for (i = 0; i < list.length; i++) {
    let title = list[i];
    let has_setup = title.dataset.is_ve_setup;
    if (!has_setup) {
      let parent = null;
      try {
        parent = title.parentElement.parentElement.parentElement.parentElement;
      } catch (error) {
        parent = null;
      }
      if (parent) {
        let is_feature = parent.classList.contains('feature') ? true : false;
        let is_bug     = parent.classList.contains('bug')     ? true : false;
        if (is_feature || is_bug) {
          let story_id = parent.dataset.id;
          let span = document.createElement("span");
          span.classList.add("ve_story_id");
          span.innerHTML = '[' + story_id + ']&nbsp;';
          title.parentNode.insertBefore(span, title);
          title.dataset.is_ve_setup = 1;
        }
      }
    }
  }
}
window.onload = function() {
  set_pivotal_story_id_visible();
  setTimeout(set_pivotal_story_id_visible, 3000);
};
set_pivotal_story_id_visible();