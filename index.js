// method -> obj
// function -> global (window, global)

const video = {
  title: "myTitle",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(tag, this.title);
    });
  },
};

video.showTags();
