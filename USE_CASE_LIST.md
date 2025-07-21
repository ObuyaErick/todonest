: DefaultTabController(
                  length: categorisedUseCases.length,
                  initialIndex: 1,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      TabBar(
                          isScrollable: true,
                          tabAlignment: TabAlignment.start,
                          tabs: [
                            for (var useCaseCategory
                                in categorisedUseCases.keys)
                              Tab(
                                text: useCaseCategory,
                              )
                          ]),
                      Expanded(
                        child: TabBarView(
                          children: [
                            for (var useCaseCategoryEntry
                                in categorisedUseCases.entries)
                              UseCaseGroup(
                                category: useCaseCategoryEntry.key,
                                useCases: useCaseCategoryEntry.value,
                              )
                          ],
                        ),
                      )
                    ],
                  ),
                );
