import 'package:easy_localization/easy_localization.dart';
// ignore: implementation_imports
import 'package:easy_localization/src/easy_localization_controller.dart';
import 'package:amit142857/src/localization/app_localizations.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

final localeControllerProvider = Provider<EasyLocalizationController>((ref) {
  return EasyLocalizationController(
    supportedLocales: AppLocalizations.supportedLocales,
    path: AppLocalizations.path,
    fallbackLocale: AppLocalizations.fallbackLocale,
    useFallbackTranslations: true,
    saveLocale: true,
    assetLoader: const RootBundleAssetLoader(),
    useOnlyLangCode: false,
    onLoadError: (_) {},
  );
});
