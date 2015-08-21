require 'test_helper'

class AngularControllerTest < ActionController::TestCase
  test "should get angular" do
    get :angular
    assert_response :success
  end

end
