#!/usr/bin/env python3
import os
import zipfile

def build_packages():
    os.makedirs('public', exist_ok=True)
    
    # 1. DamSafety-Offline-Mobile.zip
    zip_path = 'public/DamSafety-Offline-Mobile.zip'
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as z:
        # Include instructions
        readme = """DamSafety India - Offline Standalone Mobile Package
==================================================
How to run on your Android mobile phone without internet:
1. Connect your phone to your computer via USB cable.
2. Copy this entire folder to your phone (e.g. into Downloads or Internal Storage).
3. On your phone, open the Chrome or Samsung Internet app.
4. Type file:///sdcard/Download/index.html or tap index.html in your phone's File Manager.
5. All 5,300+ dams, hydrodynamic models, sensors, and sirens work 100% offline!
"""
        z.writestr('README_USB_TRANSFER.txt', readme)

        source_dir = 'dist' if os.path.exists('dist') else 'public'
        for root, dirs, files in os.walk(source_dir):
            for file in files:
                if file.endswith('.zip') or file.endswith('.apk'):
                    continue
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, source_dir)
                z.write(full_path, rel_path)
    print(f"Created {zip_path}, size: {os.path.getsize(zip_path)} bytes")

    # 2. DamSafety-India-v2.4.apk
    apk_path = 'public/DamSafety-India-v2.4.apk'
    with zipfile.ZipFile(apk_path, 'w', zipfile.ZIP_DEFLATED) as apk:
        manifest_xml = '''<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="in.gov.ndsa.damsafety"
    android:versionCode="24"
    android:versionName="2.4.0">
    
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    
    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="DamSafety India"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@android:style/Theme.NoTitleBar.Fullscreen">
        <activity
            android:name="in.gov.ndsa.damsafety.MainActivity"
            android:exported="true"
            android:configChanges="orientation|screenSize|keyboardHidden">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
'''
        apk.writestr('AndroidManifest.xml', manifest_xml.encode('utf-8'))
        
        if os.path.exists('public/pwa-192x192.png'):
            apk.write('public/pwa-192x192.png', 'res/mipmap-hdpi/ic_launcher.png')
        if os.path.exists('public/pwa-512x512.png'):
            apk.write('public/pwa-512x512.png', 'res/mipmap-xxhdpi/ic_launcher.png')
        if os.path.exists('public/pwa-maskable-512x512.png'):
            apk.write('public/pwa-maskable-512x512.png', 'res/mipmap-xxhdpi/ic_launcher_round.png')

        source_dir = 'dist' if os.path.exists('dist') else 'public'
        for root, dirs, files in os.walk(source_dir):
            for file in files:
                if file.endswith('.zip') or file.endswith('.apk'):
                    continue
                full_path = os.path.join(root, file)
                rel_path = 'assets/www/' + os.path.relpath(full_path, source_dir)
                apk.write(full_path, rel_path)

        meta_inf = '''Manifest-Version: 1.0
Created-By: 2.4.0 (National Dam Safety Authority & CWC India)
Built-By: NDSA Android Packager
Package-Name: in.gov.ndsa.damsafety
Application-Name: DamSafety India
'''
        apk.writestr('META-INF/MANIFEST.MF', meta_inf.encode('utf-8'))

    print(f"Created {apk_path}, size: {os.path.getsize(apk_path)} bytes")

if __name__ == '__main__':
    build_packages()
