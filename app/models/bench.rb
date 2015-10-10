class Bench < ActiveRecord::Base
  def self.in_bounds(bounds)
    Bench.where(
      "(lat BETWEEN ? AND ?) AND (lng BETWEEN ? AND ? )",
      bounds[:southWest][:lat],
      bounds[:northEast][:lat],
      bounds[:southWest][:lng],
      bounds[:northEast][:lng]
    )
  end
end
