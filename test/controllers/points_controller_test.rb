require "test_helper"

class PointsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @point = points(:one)
  end

  test "should get index" do
    get points_url, as: :json
    assert_response :success
  end

  test "should create point" do
    assert_difference("Point.count") do
      post points_url, params: { point: { description: @point.description, name: @point.name } }, as: :json
    end

    assert_response :created
  end

  test "should show point" do
    get point_url(@point), as: :json
    assert_response :success
  end

  test "should update point" do
    patch point_url(@point), params: { point: { description: @point.description, name: @point.name } }, as: :json
    assert_response :success
  end

  test "should destroy point" do
    assert_difference("Point.count", -1) do
      delete point_url(@point), as: :json
    end

    assert_response :no_content
  end
end
