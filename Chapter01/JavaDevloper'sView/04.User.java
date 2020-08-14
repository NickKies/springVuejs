//스코프와 클로저 자바 예제
public class User {
    private String name;
    private List<String> interests;

    public User(String name, List<String> interests) {
        this.name = name;
        this.interests = interests;
    }


    // user의 interests에 something을 가지고 있는지 체크
    public boolean isInterestedIn(String something) {
        boolean interested = false;
        for ( int i = 0; i < interests.size(); i++ ) {
            if ( interested.get(i).equals(something) ) {
                interested = true;
                break;
            }
        }
        return interested;
    }
}