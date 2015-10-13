class Api::BenchesController < ApplicationController
  def index
    benches = Bench.all
    if bounds
      benches = Bench.in_bounds(bounds)
    end
    @benches = benches
    render 'index'
  end

  def create
    bench = Bench.create!(bench_params)
    render json: bench
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end

  def bounds
    params[:bounds]
  end
end
