#include <stdio.h>
#include <inttypes.h>

int64_t maxofthree(int64_t, int64_t, int64_t);

int main() {
	printf("%ld\n", maxofthree(1, -4, -7));
	printf("%ld\n", maxofthree(2, -6, 1));
	printf("%ld\n", maxofthree(2, 3, -2));
	return 0;
}

