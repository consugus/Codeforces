// 961A - Tetris.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <iostream> // para que funcione el cin, cout
#include <array>
#include <vector> // para poder utilizar vectores de tamaño dinámico
#include <algorithm> //para que funcione el sort
using namespace std;

int main()
{
	int counter = 0;
	
	int n, m; // 3 9
	cout << "Ingrese los valores de n y m" << endl;
	cin >> n >> m;	
	cout << "n: " << n << "    m: " << m << endl;

	vector<char> cubes;
	cubes.resize(m);
	vector<int> platform;
	platform.resize(n);


	cout << "Ingrese los valores de los cubos" << endl;
	for (int i = 0; i < m; i++) {
		cin >> cubes[i];
	};
		
	for (int i = 0; i < m; i++) {
		platform[ cubes[i] - 1 ]++;	
	}
	
	//sort(platform, platform + m);

	for (int i = 0; i < n; i++) {
		if (i == 0) {
			counter = platform[i];
		}
		if (platform[i] < counter) {
			counter = platform[i];
		}
	}
	
	cout << counter << endl;
	
    return 0;
}

/*
3 9
1 1 2 2 2 3 1 2 3		// 2
*/

