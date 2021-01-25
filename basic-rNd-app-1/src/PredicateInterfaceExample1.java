import java.util.function.Predicate;

public class PredicateInterfaceExample1 {
	public static void main(String[] args) {
//		Predicate<Integer> predicate = new Predicate<Integer>() {
//			@Override
//			public boolean test(Integer value) {
//				return value < 10;
//			}
//		};

		// Creating predicate
		Predicate<Integer> lesserthan = value -> (value < 10);

		// Calling Predicate method
		System.out.println(lesserthan.test(5));
	}
}