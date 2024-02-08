import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:amit142857/src/common/domain/language.dart';
import 'package:amit142857/src/localization/generated/locale_keys.g.dart';
import 'package:amit142857/src/localization/json_list_translation.dart';
import 'package:amit142857/src/localization/locale_controller.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'language_repository.g.dart';

@riverpod
LanguageRepository languageRepository(LanguageRepositoryRef ref) {
  return LanguageRepository(ref);
}

class LanguageRepository {
  LanguageRepository(this._ref);

  final Ref _ref;

  List<Language> getLanguages() {
    final locale = _ref.watch(localeControllerProvider).locale;
    final jsonLanguages = trList(locale, LocaleKeys.languages);
    final languages = jsonLanguages.map((jsonLanguage) {
      return Language.fromJson(jsonLanguage);
    }).toList();
    return languages;
  }
}
