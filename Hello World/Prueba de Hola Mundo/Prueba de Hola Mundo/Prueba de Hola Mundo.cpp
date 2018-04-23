// Prueba de Hola Mundo.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include "iostream"
#include <iostream> // para que funcione el .sort
using namespace std;


int main()
{
	//printf("Hola mundo!\n\n" );	
	int i, n, x = 0, y = 0, z = 0, x_sum = 0, y_sum = 0, z_sum = 0;
	cin >> n;
	for (i = 0; i < n; i++) {
		cin >> x >> y >> z;
		x_sum += x;
		y_sum += y;
		z_sum += z;
	}

	if (x_sum || y_sum || z_sum) {
		cout << "NO" << endl;
	}
	else {
		cout << "YES" << endl;
	};

	return 0;
}

/*

3
4 1 7
-3 4 -1
-1 -5 -6

*/

