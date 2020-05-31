function thumbnailExists(thumbnail) {
  return thumbnail.length > 0 && thumbnail !== 'self';
}

module.exports = { thumbnailExists}